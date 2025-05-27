import { useActionState, useState } from 'react';
import { Link } from 'react-router';

import AuthInput from '../inputs/auth-input/AuthInput.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';
import useErrorState from '../../hooks/useErrorState.js';

import { useRegister } from '../../api/authApi.js';
import useUserContext from '../../hooks/useUserContext.js';

import { signupSchema } from '../../schemas/signupSchema.js';

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const { register } = useRegister();

  const { userLogin } = useUserContext();

  const { errors, errorHandler } = useErrorState();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormData((curState) => ({
      ...curState,
      [name]: value,
    }));
  }

  const registerHandler = async (_, formData) => {
    const userData = Object.fromEntries(formData);

    try {
      await signupSchema.validate(userData, { abortEarly: false })

      const authData = await register(
        userData.username.trim(),
        userData.email.toLowerCase().trim(),
        userData.password.trim(),
      );

      userLogin(authData);
    } catch (error) {
      errorHandler(error);
    }
  }

  const [, registerAction, isPending] = useActionState(registerHandler);

  return (
    <section className="flex max-w-[17.5em] flex-1 flex-col justify-center py-12">
      <h1 className="mb-10 text-center text-2xl/9 font-bold text-sky-800">
        Create a new account
      </h1>

      <form action={registerAction} className="space-y-9">
        <div>
          <label htmlFor="username" className="label-style">
            Username
          </label>

          <AuthInput
            identifier="username"
            hint="Enter username here"
            inputValue={formData.username}
            onTyping={inputChangeHandler}
            error={errors.username}
          />

          {errors.username &&
            <p className="error-msg">{errors.username}</p>
          }
        </div>

        <div>
          <label htmlFor="email" className="label-style">
            Email
          </label>

          <AuthInput
            identifier="email"
            hint="Enter email here"
            inputValue={formData.email}
            onTyping={inputChangeHandler}
            error={errors.email}
          />

          {errors.email &&
            <p className="error-msg">{errors.email}</p>
          }
        </div>

        <div>
          <label htmlFor="password" className="label-style">
            Password
          </label>

          <AuthInput
            identifier="password"
            hint="Enter password here"
            error={errors.password}
          />

          {errors.password &&
            <p className="error-msg">{errors.password}</p>
          }
        </div>

        <div>
          <label htmlFor="rePassword" className="label-style">
            Repeat password
          </label>

          <AuthInput
            identifier="rePassword"
            hint="Enter repeated password here"
            error={errors.rePassword}
          />

          {errors.rePassword &&
            <p className="error-msg">{errors.rePassword}</p>
          }
        </div>

        {errors.general &&
          <p className="error-msg text-center">{errors.general}</p>
        }

        <SubmitButton
          label="Sign Up"
          pending={isPending}
          style="submit-style"
        />
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-sky-600">
          Log In
        </Link>
      </p>
    </section>
  );
}

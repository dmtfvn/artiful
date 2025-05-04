import { Link, useNavigate } from 'react-router';

import FormInput from '../inputs/form-input/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';
import { useRegister } from '../../api/authApi.js';
import useUserContext from '../../hooks/useUserContext.js';
import { useActionState } from 'react';

export default function SignUp() {
  const navigate = useNavigate();

  const { register } = useRegister();

  const { userLogin } = useUserContext();

  const registerHandler = async (_, formData) => {
    const userData = Object.fromEntries(formData);

    if (Object.values(userData).some(el => el === '')) {
      console.log('All fields are required!')
      return;
    }

    if (userData['password'] !== userData['re-password']) {
      console.log('Passwords don\'t match!')
      return;
    }

    try {
      const authData = await register(userData.username, userData.email, userData.password);

      userLogin(authData);

      navigate('/profile');
    } catch (err) {
      console.log(err.message)
    }
  }

  const [, registerAction, isPending] = useActionState(registerHandler, {
    username: '',
    email: '',
    password: '',
  });

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

          <FormInput identifier="username" hint="Enter username here" />
        </div>

        <div>
          <label htmlFor="email" className="label-style">
            Email
          </label>

          <FormInput identifier="email" hint="Enter email here" />
        </div>

        <div>
          <label htmlFor="password" className="label-style">
            Password
          </label>

          <FormInput identifier="password" hint="Enter password here" />
        </div>

        <div>
          <label htmlFor="re-password" className="label-style">
            Repeat password
          </label>

          <FormInput identifier="re-password" hint="Enter repeated password here" />
        </div>

        <SubmitButton label="Sign Up" pending={isPending} />
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

import { useActionState } from 'react';
import { Link, useNavigate } from 'react-router';

import AuthInput from '../inputs/auth-input/AuthInput.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';

import { useLogin } from '../../api/authApi.js';
import useUserContext from '../../hooks/useUserContext.js';

export default function Login() {
  const navigate = useNavigate();

  const { login } = useLogin();

  const { userLogin } = useUserContext();

  const loginHandler = async (_, formData) => {
    const userData = Object.fromEntries(formData);

    if (Object.values(userData).some(el => el === '')) {
      console.log('All fields are required!')
      return;
    }

    try {
      const authData = await login(userData.email, userData.password);

      userLogin(authData);

      navigate(-1);
    } catch (err) {
      console.log(err.message)
    }
  }

  const [, loginAction, isPending] = useActionState(loginHandler, {
    email: '',
    password: '',
  });

  return (
    <section className="flex max-w-[17.5em] flex-1 flex-col justify-center py-12">
      <h1 className="mb-10 text-center text-2xl/9 font-bold text-sky-800">
        Sign in your account
      </h1>

      <form action={loginAction} className="space-y-9">
        <div>
          <label htmlFor="email" className="label-style">
            Email
          </label>

          <AuthInput identifier="email" hint="Enter email here" />
        </div>

        <div>
          <label htmlFor="password" className="label-style">
            Password
          </label>

          <AuthInput identifier="password" hint="Enter password here" />
        </div>

        <SubmitButton
          style="submit-style"
          pending={isPending}
          label="Log In"
        />
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Don&rsquo;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-sky-600">
          Sign Up here
        </Link>
      </p>
    </section>
  );
}

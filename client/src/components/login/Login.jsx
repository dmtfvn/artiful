import { useActionState, useState } from 'react';
import { Link } from 'react-router';

import AuthInputUnctrl from '../inputs/auth-input/AuthInputUnctrl.jsx';
import SubmitButton from '../buttons/submit-button/SubmitButton.jsx';

import { useLogin } from '../../api/authApi.js';
import useUserContext from '../../hooks/useUserContext.js';

export default function Login() {
  const [error, setError] = useState('');

  const { login } = useLogin();

  const { userLogin } = useUserContext();

  const loginHandler = async (_, formData) => {
    const userData = Object.fromEntries(formData);

    try {
      if (Object.values(userData).some(el => el === '')) {
        throw new Error('All fields are required');
      }

      const authData = await login(
        userData.email.trim(),
        userData.password.trim(),
      );

      userLogin(authData);
    } catch (err) {
      setError(err.message);
    }
  }

  const [, loginAction, isPending] = useActionState(loginHandler);

  return (
    <section className="auth-form">
      <h1 className="auth-form-title">
        Sign in your account
      </h1>

      <form action={loginAction} className="space-y-9">
        <div>
          <label htmlFor="email" className="label-style">
            Email
          </label>

          <AuthInputUnctrl
            label="email"
            hint="Enter email here"
          />
        </div>

        <div>
          <label htmlFor="password" className="label-style">
            Password
          </label>

          <AuthInputUnctrl
            label="password"
            hint="Enter password here"
          />
        </div>

        {error &&
          <p className="error-msg text-center">{error}</p>
        }

        <SubmitButton
          label="Log In"
          pending={isPending}
          style="submit-button-style"
        />
      </form>

      <p className="auth-form-switch">
        Don&rsquo;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-sky-600">
          Sign Up here
        </Link>
      </p>
    </section>
  );
}

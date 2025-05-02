import { Link } from 'react-router';

import FormInput from '../inputs/form-input/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';

export default function Login() {
  return (
    <section className="flex max-w-[17.5em] flex-1 flex-col justify-center py-12">
      <h1 className="mb-10 text-center text-2xl/9 font-bold text-sky-800">
        Sign in your account
      </h1>

      <form action="#" className="space-y-9">
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

        <SubmitButton label="Log In" />
      </form>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Don&#39;t have an account?{' '}
        <Link to="/signup" className="font-semibold text-sky-600">
          Sign Up here
        </Link>
      </p>
    </section>
  );
}

import { Link } from 'react-router';

import FormInput from '../inputs/form-input/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';

export default function SignUp() {
  return (
    <section className="flex max-w-[17.5em] flex-1 flex-col justify-center py-12">
      <h1 className="mb-10 text-center text-2xl/9 font-bold text-sky-800">
        Create a new account
      </h1>

      <form action="#" className="space-y-9">
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

        <SubmitButton label="Sign Up" />
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

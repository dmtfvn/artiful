import { Link } from 'react-router';

import FormInput from '../inputs/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';

export default function Login() {
  return (
    <div className="flex max-w-[17.5em] flex-1 flex-col justify-center py-12">
      <h1 className="mb-10 text-center text-2xl/9 font-bold text-sky-800">
        Sign in your account
      </h1>

      <div>
        <form action="#" className="space-y-9">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-white/80">
              Email
            </label>

            <div className="mt-2">
              <FormInput identifier="email" hint="Enter email here" />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-white/80">
              Password
            </label>

            <div className="mt-2">
              <FormInput identifier="password" hint="Enter password here" />
            </div>
          </div>

          <div>
            <SubmitButton label="Log In" />
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Don&#39;t have an account?{' '}
          <Link to="/signup" className="font-semibold text-sky-600">
            Sign Up here
          </Link>
        </p>
      </div>
    </div>
  )
}

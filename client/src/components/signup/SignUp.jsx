import { Link } from 'react-router';

import FormInput from '../inputs/FormInput.jsx';
import SubmitButton from '../buttons/SubmitButton.jsx';

export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 px-5 text-center text-2xl/9 font-bold tracking-tight text-gray-600">
            Enter your login credentials
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Username
              </label>

              <div className="mt-2">
                <FormInput identifier="username" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email
              </label>

              <div className="mt-2">
                <FormInput identifier="email" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                Password
              </label>

              <div className="mt-2">
                <FormInput identifier="password" />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                Repeat password
              </label>

              <div className="mt-2">
                <FormInput identifier="re-password" />
              </div>
            </div>

            <div>
              <SubmitButton label="Sign Up" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-gray-400 hover:text-gray-300">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

import { Link } from 'react-router';

import InputEmail from '../form-input/input-email/InputEmail.jsx';
import InputPassword from '../form-input/input-password/InputPassword.jsx';
import ButtonSubmit from '../form-button/ButtonSubmit.jsx';

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-600">
            Enter your login credentials
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-white">
                Email
              </label>

              <div className="mt-2">
                <InputEmail />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm/6 font-medium text-white">
                Password
              </label>

              <div className="mt-2">
                <InputPassword />
              </div>
            </div>

            <div>
              <ButtonSubmit label="Log In" />
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don&#39;t have an account?{' '}
            <Link to="/signup" className="font-semibold text-gray-400 hover:text-gray-300">
              Sign Up here
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

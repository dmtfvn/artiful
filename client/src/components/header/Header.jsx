import { useState } from 'react';
import { Link } from 'react-router';

import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Catalog', path: '/catalog' },
  { name: 'Create', path: '/create' },
  { name: 'Logout', path: '/logout' },
];

export default function Header() {
  const [toggleMobile, setToggleMobile] = useState(false);

  return (
    <header className="flex-center flex-col">
      <div className="flex-center max-w-[15em] h-auto py-5">
        <Link to="/">
          <img src="/logos/artiful-white.png" alt="artiful-logo" />
        </Link>
      </div>

      <nav className="pt-5 border-t-1 border-t-[var(--color-gy-ish)]">
        <div className="md:hidden">
          <button type="button" onClick={() => setToggleMobile(true)}
            className="text-[var(--color-yt-ish)] cursor-pointer"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden md:flex md:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="h-nav-link"
            >
              {item.name}
            </Link>
          ))}

          <div className="flex-center">
            <Link to="/login" className="h-nav-link">Log In</Link>

            <p className="text-[var(--color-gy-ish)] mx-0.5">|</p>

            <Link to="/signup" className="h-nav-link">Sign Up</Link>
          </div>
        </div>
      </nav>

      <Dialog open={toggleMobile} onClose={setToggleMobile} className="lg:hidden">
        <DialogPanel
          className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm">
          <div className="flex justify-self-end">
            <button type="button" onClick={() => setToggleMobile(false)}
              className="text-[var(--color-yt-ish)]"
            >
              <XMarkIcon aria-hidden="true" className="size-6 cursor-pointer" />
            </button>
          </div>

          <div className="mt-6">
            <div className="-my-6 divide-y divide-[var(--color-gy-ish)]">
              <div className="py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="m-nav-link"
                    onClick={() => setToggleMobile(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col pt-6">
                <Link to="/login"
                  className="m-nav-link"
                  onClick={() => setToggleMobile(false)}
                >
                  Log In
                </Link>

                <Link to="/signup"
                  className="m-nav-link"
                  onClick={() => setToggleMobile(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

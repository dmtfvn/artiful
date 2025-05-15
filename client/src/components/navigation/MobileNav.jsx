import { Link } from 'react-router';

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { authLinks, guestLinks } from './navigation.js';

export default function MobileNav({
  token,
  state,
  setMobile
}) {
  return (
    <Dialog open={state} onClose={setMobile} className="md:hidden">
      <DialogPanel
        className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-xs"
      >
        <button
          type="button"
          className="flex justify-self-end p-1 text-[var(--color-gy-ish)] hover:bg-stone-900 rounded-sm cursor-pointer"
          onClick={() => setMobile(false)}
        >
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>

        <div className="flex flex-col py-6 divide-y divide-stone-800">
          <section className="pb-6">
            {token
              ?
              authLinks.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setMobile(false)}
                >
                  {item.name}
                </Link>
              ))
              :
              guestLinks.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="mobile-nav-link"
                  onClick={() => setMobile(false)}
                >
                  {item.name}
                </Link>
              ))
            }
          </section>

          <section className="pt-6">
            {token
              ?
              <Link to="/logout" className="mobile-nav-link" onClick={() => setMobile(false)}>
                Logout
              </Link>
              :
              <>
                <Link to="/login" className="mobile-nav-link" onClick={() => setMobile(false)}>
                  Log In
                </Link>

                <Link to="/signup" className="mobile-nav-link" onClick={() => setMobile(false)}>
                  Sign Up
                </Link>
              </>
            }
          </section>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

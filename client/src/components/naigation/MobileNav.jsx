import { Link } from 'react-router';

import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function MobileNav({
  token,
  state,
  setMobile
}) {
  return (
    <Dialog open={state} onClose={setMobile} className="md:hidden">
      <DialogPanel
        className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm"
      >
        <button
          type="button"
          onClick={() => setMobile(false)}
          className="flex justify-self-end text-[var(--color-yt-ish)] cursor-pointer"
        >
          <XMarkIcon aria-hidden="true" className="size-6" />
        </button>

        <div className="flex flex-col gap-10 py-6">
          <section>
            <Link to="/"
              className="mobile-nav-link"
              onClick={() => setMobile(false)}
            >
              Home
            </Link>

            <Link to="/gallery"
              className="mobile-nav-link"
              onClick={() => setMobile(false)}
            >
              Gallery
            </Link>
          </section>

          {token
            ?
            <section>
              <Link to="/profile"
                className="mobile-nav-link"
                onClick={() => setMobile(false)}
              >
                Profile
              </Link>

              <Link to="/logout"
                className="mobile-nav-link"
                onClick={() => setMobile(false)}
              >
                Logout
              </Link>
            </section>
            :
            <section>
              <Link to="/login"
                className="mobile-nav-link"
                onClick={() => setMobile(false)}
              >
                Log In
              </Link>

              <Link to="/signup"
                className="mobile-nav-link"
                onClick={() => setMobile(false)}
              >
                Sign Up
              </Link>
            </section>
          }
        </div>
      </DialogPanel>
    </Dialog>
  );
}

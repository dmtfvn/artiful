import { Link } from 'react-router';

import { Bars3Icon } from '@heroicons/react/24/outline';

import { authLinks, guestLinks } from './navigation.js';

export default function HeaderNav({
  token,
  setMobile
}) {
  return (
    <nav className="pt-5 border-t-1 border-t-stone-700">
      <button
        type="button"
        className="md:hidden text-stone-600 hover:text-stone-400 border-1 border-stone-800 rounded-sm cursor-pointer"
        onClick={() => setMobile(true)}
      >
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <div className="hidden md:flex md:gap-x-30">
        <section className="flex gap-6">
          {token
            ?
            (authLinks.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="header-nav-link"
              >
                {item.name}
              </Link>
            )))
            :
            (guestLinks.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className="header-nav-link"
              >
                {item.name}
              </Link>
            )))
          }
        </section>

        <section className="flex-center">
          {token
            ?
            <Link to="/logout" className="header-nav-link">Logout</Link>
            :
            <>
              <Link to="/login" className="header-nav-link">Log In</Link>

              <p className="text-stone-700 mx-0.5">|</p>

              <Link to="/signup" className="header-nav-link">Sign Up</Link>
            </>
          }
        </section>
      </div>
    </nav>
  );
}

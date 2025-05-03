import { Link } from 'react-router';

import { Bars3Icon } from '@heroicons/react/24/outline';

export default function HeaderNav({
  token,
  setMobile
}) {
  return (
    <nav className="pt-5 border-t-1 border-t-[var(--color-gy-ish)]">
      <button
        type="button"
        className="md:hidden text-[var(--color-yt-ish)] cursor-pointer"
        onClick={() => setMobile(true)}
      >
        <Bars3Icon aria-hidden="true" className="size-6" />
      </button>

      <div className="hidden md:flex md:gap-x-18">
        <section className="flex gap-6">
          <Link to="/" className="header-nav-link">Home</Link>
          <Link to="/gallery" className="header-nav-link">Gallery</Link>

          {token
            ?
            <>
              <Link to="/profile" className="header-nav-link">Profile</Link>
              <Link to="/logout" className="header-nav-link">Logout</Link>
            </>
            :
            <div className="flex-center">
              <Link to="/login" className="header-nav-link">Log In</Link>

              <p className="text-[var(--color-gy-ish)] mx-0.5">|</p>

              <Link to="/signup" className="header-nav-link">Sign Up</Link>
            </div>
          }
        </section>
      </div>
    </nav>
  );
}

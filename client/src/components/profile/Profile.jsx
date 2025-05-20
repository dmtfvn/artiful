import { Link, Outlet, useLocation } from 'react-router';

import useUserContext from '../../hooks/useUserContext.js';

export default function Profile() {
  const { username } = useUserContext();

  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="section-wrapper-grid">
      <div className="flex-center flex-col gap-7.5">
        <h1 className="text-4xl text-center text-black/75 font-bold pt-20 txt-shadow">
          Welcome to your personal space, <span className="word-wrap">{username}</span>
        </h1>

        <Link
          to="/profile/create"
          className="relative text-black/75 bg-stone-800 px-5 py-2 rounded-lg cursor-pointer overflow-hidden group"
        >
          <span className="hover-gradient"></span>
          <span className="relative z-10">Create an Art</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 2sm:grid-cols-2 mx-auto border-1 border-stone-800 rounded-xl mt-30 p-1.5 gap-1.5">
        <Link
          to="/profile"
          className={`profile-link ${path === '/profile' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          View created
        </Link>

        <Link
          to="/profile/liked"
          className={`profile-link ${path === '/profile/liked' ? 'bg-stone-700' : 'bg-stone-800'}`}
        >
          View liked
        </Link>
      </div>

      <Outlet />
    </section>
  );
}

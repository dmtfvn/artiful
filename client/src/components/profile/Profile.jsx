import { Link, Outlet } from 'react-router';

import useUserContext from '../../hooks/useUserContext.js';

export default function Profile() {
  const { username } = useUserContext();

  return (
    <section className="section-wrapper">
      <div className="flex-center flex-col gap-7.5">
        <h1 className="text-4xl text-center text-black/75 font-bold mt-15 h1-shadow">
          {`Welcome to your personal space, ${username}!`}
        </h1>

        <button className="relative text-black/75 bg-stone-800 px-5 py-2 rounded-lg cursor-pointer overflow-hidden group">
          <span className="hover-gradient"></span>
          <span className="relative z-10">Create an Art</span>
        </button>
      </div>

      <div className="grid grid-cols-1 2sm:grid-cols-2 mx-auto border-2 border-stone-800 rounded-xl mt-30 p-1.5 gap-1.5">
        <Link to="/profile" className="profile-link">
          View created
        </Link>

        <Link to="/profile/liked" className="profile-link">
          View liked
        </Link>
      </div>

      <Outlet />
    </section>
  );
}

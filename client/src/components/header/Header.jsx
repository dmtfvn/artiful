import { useState } from 'react';
import { Link } from 'react-router';

import useUserContext from '../../hooks/useUserContext.js';

import HeaderNav from '../naigation/HeaderNav.jsx';
import MobileNav from '../naigation/MobileNav.jsx';

export default function Header() {
  const { accessToken } = useUserContext();

  const [mobileState, setMobileState] = useState(false);

  return (
    <header className="flex-center flex-col mb-10">
      <div className="flex-center max-w-[12em] h-auto py-5">
        <Link to="/">
          <img src="/logo.png" alt="artiful-logo" />
        </Link>
      </div>

      <HeaderNav
        token={accessToken}
        setMobile={setMobileState}
      />

      <MobileNav
        token={accessToken}
        state={mobileState}
        setMobile={setMobileState}
      />
    </header>
  );
}

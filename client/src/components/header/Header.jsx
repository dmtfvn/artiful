import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="flex-center flex-col">
      <div className="flex-center max-w-[15em] h-auto py-5">
        <Link to="/">
          <img src="/logos/artiful-white.png" alt="artiful-logo" />
        </Link>
      </div>

      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/catalog" className="nav-link">Catalog</Link>
        <Link to="/create" className="nav-link">Create</Link>
        <Link to="/logout" className="nav-link">Logout</Link>

        <div className="flex-center">
          <Link to="/login" className="nav-link">Log In</Link>

          <p className="text-[var(--color-gy-ish)] mx-0.5">|</p>

          <Link to="/signup" className="nav-link">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

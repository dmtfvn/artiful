import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="flex-center flex-col">
      <div className="flex-center max-w-[15em] h-auto py-10">
        <img src="/logos/artiful-primary.png" alt="artiful-logo" />
      </div>

      <nav className="header-nav">
        <Link to="/">Home</Link>
        <Link to="/catalog">Catalog</Link>
        <Link to="/create">Create</Link>
        <Link to="/logout">Logout</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign up</Link>
      </nav>
    </header>
  );
}

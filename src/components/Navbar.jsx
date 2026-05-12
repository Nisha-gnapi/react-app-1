import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-5xl mx-auto flex gap-6">
        <Link to="/">Home</Link>

        <Link to="/about">About</Link>

        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

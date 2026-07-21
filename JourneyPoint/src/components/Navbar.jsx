import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
  { name: "Home", path: "/home" },
  { name: "About", path: "/about" },
  { name: "Tours", path: "/tours" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },

];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          JourneyPoint
        </h1>

        {/* Navigation */}
        <ul className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <NavLink
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
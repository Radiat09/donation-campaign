import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar  max-w-7xl mx-auto">
        <div className="flex-1">
          <NavLink>
            <img src="/public/Logo.png" alt="Logo" />
          </NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li className="mr-2">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li className="mr-2">
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

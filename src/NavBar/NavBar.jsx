import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="py-5 max-w-7xl mx-auto">
        <div className="flex  flex-col md:flex-row  md:mx-0 gap-2 mx-auto justify-between items-center  ">
          <div className="md:flex-1">
            <NavLink>
              <img src="/public/Logo.png" alt="Logo" />
            </NavLink>
          </div>
          <div className="">
            <ul className="menu menu-horizontal md:px-1 md:text-lg md:font-medium">
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
      </div>
    </nav>
  );
};

export default Navbar;

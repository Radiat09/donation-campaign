import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;

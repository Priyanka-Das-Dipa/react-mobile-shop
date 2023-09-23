import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <Navbar></Navbar>
      <div className="py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;

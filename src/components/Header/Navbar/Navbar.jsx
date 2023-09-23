import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="shadow-md px-4 mb-5">
        <nav className="flex justify-between text-3xl font-bold py-4">
          <Logo></Logo>
          <ul className="flex gap-6 text-2xl font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-400 underline"
                    : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-400 underline"
                    : ""
                }
              >
                Favorite
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-green-400 underline"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Navbar;

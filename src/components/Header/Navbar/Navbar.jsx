import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between text-3xl font-bold max-w-screen-xl py-4 mx-auto">
        <div>
          <h2>Navbar</h2>
        </div>
        <nav>
          <ul className="flex gap-6 text-2xl font-semibold">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorite"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
              >
                Favorite
              </NavLink>
              
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-green-400 underline" : ""
                }
              >
                Login
              </NavLink>
              
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

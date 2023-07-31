import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { AuthContext } from "../provider/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.", error);
      });
  };
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <BoltIcon className="h-6 w-6 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Book Page
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Menu
            </NavLink>
          </li>
          {
            user&& <li>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Book
            </NavLink>
          </li>
          }
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Register
            </NavLink>
          </li>

          {user ? (
            <>
              <span className="bg-rose-300 rounded-sm px-2">{user.email}</span>
              <button className={({ isActive }) => (isActive ? "active" : "default")} onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        nextPage
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="menu"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Menu
                      </Link>
                    </li>
                   {user &&
                     <li>
                     <Link
                       to="books"
                       className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                     >
                       Book
                     </Link>
                   </li>
                   }
                    <li>
                      <Link
                        to="register"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Register
                      </Link>
                    </li>

                    {user ? (
                      <>
                        <span className="bg-rose-300 rounded-sm px-2">{user.email} <br /></span>
                        <button className={({ isActive }) => (isActive ? "active" : "default")} onClick={handleLogout}>Logout</button>
                      </>
                    ) : (
                      <li>
                        <Link
                          to="login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                        >
                          Login
                        </Link>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

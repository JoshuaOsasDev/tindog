import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router";
import { useContent } from "../../Context/useContent";
import { HiOutlineSearch, HiSearch } from "react-icons/hi";
import Modal from "./Modal";

function NavBar() {
  const { sticky, menuOpen, setMenuOpen, observerRef } = useContent();

  return (
    <>
      <div ref={observerRef} className="h-[1px]"></div>

      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          sticky ? "shadow-md backdrop-blur-sm" : ""
        }`}
      >
        <ul className="mx-7 flex items-center justify-between py-6">
          <li className="text-2xl font-bold">
            <NavLink to="/">tindog</NavLink>
          </li>

          {/* Hamburger Menu */}
          {!menuOpen && (
            <button
              className="text-3xl hover:text-gray-400 md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <HiBars3 />
            </button>
          )}

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            <li>
              <NavLink to="/Product" className="group">
                Product
                <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Price" className="group">
                Pricing
                <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>

            <li>
              <NavLink to="" className="group">
                Sign Up
                <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          </div>
        </ul>

        {/* Mobile Slide-in Menu */}
        <div
          onClick={() => setMenuOpen(false)}
          className={`duration-500ms fixed top-0 left-0 z-100 h-screen w-full bg-[rgba(0,0,0,.8)] opacity-100 transition-transform md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`duration-500ms fixed top-0 right-0 z-50 h-screen w-[50%] transform bg-[#ff4c68] px-10 py-20 text-white opacity-90 transition-transform md:hidden ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="absolute top-4 right-4 text-3xl hover:text-gray-900"
              onClick={() => setMenuOpen(false)}
            >
              <HiMiniXMark />
            </button>

            <ul className="flex h-full flex-col items-start space-y-4 text-xl">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Home
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Product"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Product
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  to=""
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Pricing
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/blog"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Blog
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to=""
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Contact Us
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="group"
                >
                  Login
                  <div className="w-0 border-b-2 transition-all duration-300 group-hover:w-full" />
                </NavLink>
              </li>
            </ul>

            <footer className="flex w-fit items-center space-x-4 rounded-2xl border-1 p-1">
              <input
                placeholder="search"
                type="text"
                className="w-full rounded-2xl border-0 pl-2 outline-offset-1 focus:border-0 focus:outline-0"
              />{" "}
              <span>
                <HiOutlineSearch className="text-2xl" />
              </span>
            </footer>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;

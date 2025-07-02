import { useEffect, useState } from "react";
import { HiBars3, HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router";
import { useContent } from "../../Context/useContent";
import { HiOutlineSearch } from "react-icons/hi";
import Modal from "./Modal";

function NavBar() {
  const { menuOpen, setMenuOpen } = useContent();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // You can adjust the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-black/30 shadow-md backdrop-blur-sm" : "bg-[#fff]"
      }`}
    >
      <ul className="mx-7 flex items-center justify-between py-6">
        <li className="text-2xl font-bold">
          <NavLink to="/">tindog</NavLink>
        </li>

        {!menuOpen && (
          <button
            className="text-3xl hover:text-gray-400 md:hidden"
            onClick={() => setMenuOpen(true)}
          >
            <HiBars3 />
          </button>
        )}

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

      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed top-0 left-0 z-100 h-screen w-full bg-[rgba(0,0,0,.8)] transition-transform duration-500 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`fixed top-0 right-0 z-50 h-screen w-[50%] transform bg-[#ff4c68] px-10 py-20 text-white transition-transform duration-500 md:hidden ${
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
            />
            <span>
              <HiOutlineSearch className="text-2xl" />
            </span>
          </footer>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

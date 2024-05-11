import Store from "../assets/store.svg?react";
import Home from "../assets/Home.svg?react";
import Discounts from "../assets/Discounts.svg?react";
import Statistics from "../assets/Statistics.svg?react";
import Messages from "../assets/Messages.svg?react";
import Notifications from "../assets/Notifications.svg?react";
import Settings from "../assets/Settings.svg?react";
import LogOut from "../assets/LogOut.svg?react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <aside className="bg-indigo-700">
      <nav className="bg-indigo-300 rounded-r-2xl">
        <ul className="">
          <li className="">
            <NavLink to="/" className="flex justify-center p-3 ml-2">
              <Home className="p-3" />
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/" className="flex justify-center p-3 ml-2">
              <Store className="p-3" />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-indigo-700 relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-indigo-300 before:rounded-full before:shadow-[10px_-10px_0_rgb(67,56,202)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-indigo-300 after:rounded-full after:shadow-[10px_10px_0_rgb(67,56,202)]"
                  : "flex justify-center p-3 ml-2"
              }
            >
              <Statistics class="p-3 rounded-xl bg-red-100" />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-indigo-700 relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-indigo-300 before:rounded-full before:shadow-[10px_-10px_0_rgb(67,56,202)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-indigo-300 after:rounded-full after:shadow-[10px_10px_0_rgb(67,56,202)]"
                  : "flex justify-center p-3 ml-2"
              }
            >
              <Messages className="p-3" />
            </NavLink>
          </li>
          <li className="">
            <NavLink to="/" className="flex justify-center p-3 ml-2">
              <Notifications className="p-3" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

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
    <aside className="bg-[#393C49]">
      <nav className="bg-[#1F1D2B] rounded-r-2xl">
        <ul className="">
          <li className="">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2"
              }
            >
              <Home className="p-3" />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2"
              }
            >
              {({ isActive }) => (
                <Store className={isActive ? "" : "p-3 fill-current "} />
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? `flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49]
relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5
before:bg-[#1F1D2B] before:rounded-full
before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5
after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full
after:shadow-[10px_10px_0_rgb(57,60,73)]`
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2"
              }
            >
              {({ isActive }) => (
                <Statistics
                  className={
                    isActive
                      ? "fill-current text-white p-3 rounded-xl bg-[#EA7C69]"
                      : "p-3 fill-current "
                  }
                />
              )}
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2"
              }
            >
              <Messages className="p-3" />
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2"
              }
            >
              <Notifications className="p-3" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

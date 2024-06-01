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
      <nav className="bg-[#1F1D2B] rounded-r-2xl sticky top-0">
        <ul className="flex flex-col gap-y-5  min-h-[100vh] [&>*:last-child]:mt-auto [&>*:last-child]:mb-auto">
          <li className="group">
            <NavLink to='/home' className='fill-current text-[#EA7C69] flex justify-center p-3 ml-2'>
              <Store className='p-2 bg-[rgba(235,150,106,0.26)] rounded-xl '/>
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
                <Home  className={
                  isActive
                    ? "active_tab"
                    : "tab"
                }
                />
              )}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
                <Discounts  className={
                  isActive
                    ? "active_tab"
                    : "tab"
                }
                />
              )}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
                <Statistics  className={
                  isActive
                    ? "active_tab"
                    : "tab"
                }
                />
              )}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
                <Messages  className={
                  isActive
                    ? "active_tab"
                    : "tab"
                }
                />
              )}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
              <Notifications  className={
                    isActive
                      ? "active_tab"
                      : "tab"
                  }
              />
)}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
              <Settings  className={
                    isActive
                      ? "active_tab"
                      : "tab"
                  }
              />
)}
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "active_curve"
                  : "without_curve"
              }
            >
              {({ isActive }) => (
              <LogOut  className={
                    isActive
                      ? "active_tab"
                      : "tab"
                  }
              />
)}
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

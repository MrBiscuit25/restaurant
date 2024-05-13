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
        <ul className="flex flex-col gap-y-5 min-h-[100vh] min-w-[5vw] [&>*:last-child]:mt-auto [&>*:first-child]:mb-5">
          <li className="group">
            <NavLink to='/home' className='fill-current text-[#EA7C69] flex justify-center p-3 ml-2'>
              <Store className='p-3 bg-[rgba(235,150,106,0.26)] rounded-xl '/>
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2  hover:curve_hover hover:text-white "
              }
            >
              <Home className="p-3 group-hover:rounded-xl group-hover:bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]" />
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
                <Discounts
                  className={
                    isActive
                      ? "fill-current text-white p-3 rounded-xl bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]"
                      : "p-3 fill-current "
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
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2  hover:curve_hover hover:text-white "
              }
            >
              <Statistics className="p-3 group-hover:rounded-xl group-hover:bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]" />
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2  hover:curve_hover hover:text-white "
              }
            >
              <Messages className="p-3 group-hover:rounded-xl group-hover:bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]" />
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2  hover:curve_hover hover:text-white "
              }
            >
              <Notifications className="p-3 group-hover:rounded-xl group-hover:bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]" />
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2  hover:curve_hover hover:text-white "
              }
            >
              <Settings className="p-3 group-hover:rounded-xl group-hover:bg-[#EA7C69] group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)]" />
            </NavLink>
          </li>
          <li className="group">
            <NavLink
              to="/some"
              className={({ isActive }) =>
                isActive
                  ? "flex justify-center p-3 ml-2 rounded-l-xl bg-[#393C49] relative before:absolute before:w-5  before:h-5 before:right-0 before:-bottom-5 before:bg-[#1F1D2B] before:rounded-full before:shadow-[10px_-10px_0_rgb(57,60,73)] after:absolute after:w-5  after:h-5 after:right-0 after:-top-5 after:bg-[#1F1D2B] after:rounded-full after:shadow-[10px_10px_0_rgb(57,60,73)]"
                  : "fill-current text-[#EA7C69] flex justify-center p-3 ml-2 hover:curve_hover_bottom hover:text-white "
              }
            >
              <LogOut className="p-3 group-hover:bg-[#EA7C69] group-hover:rounded-xl group-hover:shadow-[0_4px_11px_0_rgba(234,124,105,0.32)] mb-5" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Nav;

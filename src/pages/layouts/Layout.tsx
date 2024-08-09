import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
const Layout = () => {
  return (
    <>
      <Nav />
      <div className="bg-[#393C49] text-white grow">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

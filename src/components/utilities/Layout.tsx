import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-6">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

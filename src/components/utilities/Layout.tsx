import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      {/* <div className="grid grid-cols-6"> */}
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="font-lexend">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

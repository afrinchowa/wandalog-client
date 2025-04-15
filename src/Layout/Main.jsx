import { Outlet } from "react-router-dom";
import Footer from "../Pages/shared/Footer/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto" >
      <Navbar />

      <Outlet></Outlet>

      <Footer />
    </div>
  );
};

export default Main;

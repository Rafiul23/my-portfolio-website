import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[600px]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
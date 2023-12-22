import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <div className="max-w-7xl mx-auto "> */}
            {/* <div className="mx-4 md:mx-20 lg:mx-32"> */}
            <Outlet></Outlet>
            {/* </div> */}
            {/* </div> */}
            <Footer></Footer>
        </div>
    );
};

export default Main;
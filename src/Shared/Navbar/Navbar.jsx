import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

import { RiLogoutBoxFill } from "react-icons/ri";
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error);
            })
    }
    console.log(user);

    const userProfile =
        <>
            <div className="flex flex-wrap items-center gap-2">
                <h1 className=" font-bold">{user?.displayName}</h1>
                <img title="Profile" className=" rounded-full h-12 w-12 " src={`${user?.photoURL}`} alt="" />
            </div>
        </>
    const navLinks =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#8895dd] underline" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#8895dd] underline" : ""
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/dashboard/home"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#8895dd] underline" : ""
                    }
                >
                    Dashboard
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blog"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#8895dd] underline" : ""
                    }
                >
                    Blog
                </NavLink>
            </li>


        </>


    return (

        <div className="navbar bg-[#121212]  px-4 md:px-8 lg:px-10 h-auto md:h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
                        {navLinks}
                        <li className="text-black">
                            {
                                user?.email ?
                                    <div>
                                        {userProfile}
                                    </div>
                                    :
                                    <Link to={'/login'}>
                                        <button className="btn hover:bg-[#515fdd] bg-[#4F65E0] text-white rounded-full h-10 px-8 border-none">Login</button>
                                    </Link>
                            }
                        </li>
                        {
                            user?.email ?
                                <li>
                                    <div>
                                        {
                                            user?.email ? <button className="btn hover:bg-[#dd5151] bg-[#e04f4f] border-none text-white rounded-full  py-2" onClick={handleSignOut}>  <RiLogoutBoxFill className="text-white text-2xl" /> </button>
                                                :
                                                ''
                                        }
                                    </div>
                                </li>
                                :
                                ''
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center gap-2">
                    <img className="w-10 rounded-full" src="https://th.bing.com/th/id/OIG.UORTmUjdrPZ28shU93l1?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="" />

                    <h1 className="text-2xl font-bold bg-gradient-to-r from-[#be4fe0] to-[#4F65E0]  bg-clip-text text-transparent text-center">TODOish.<small>com</small> </h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end hidden lg:flex ">
                {
                    user?.email ?
                        <div className="flex items-center gap-4">
                            <h1 className="text-white">{userProfile}</h1>
                            <button className="btn hover:bg-[#dd5151] bg-[#e04f4f] border-none text-white rounded-full  " onClick={handleSignOut}>  <RiLogoutBoxFill className="text-white text-2xl" /> </button>

                        </div>
                        :
                        <Link to={'/login'}>
                            <button className="btn hover:bg-[#515fdd] bg-[#4F65E0] text-white rounded-full h-10 px-8 border-none">LOGIN</button>
                        </Link>
                }
            </div>
        </div>

    );
};

export default Navbar;
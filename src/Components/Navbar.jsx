import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navlinks = <>

        <li className="mr-4 text-alpha"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Home</NavLink></li>
        <li className="mr-4 text-alpha"><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >About</NavLink></li>
        
        {/* <li className="mr-4 text-alpha"><NavLink to='/projects'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Projects</NavLink></li> */}
        {/* <li className="mr-4 text-alpha"><NavLink to='/education'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Education</NavLink></li> */}

        <li className="mr-4 text-alpha"><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Contact Me</NavLink></li>

    </>

    return (
        <div className="navbar p-5  shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <a className="text-alpha font-bold text-3xl">Md. Rafiul Islam</a>
            </div>
            <div className="navbar-center hidden lg:flex">

            </div>
            <div className="navbar-end">
                <ul className="menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
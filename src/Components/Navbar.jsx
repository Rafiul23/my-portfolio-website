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
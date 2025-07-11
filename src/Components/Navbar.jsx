import { NavLink } from "react-router-dom";
import {motion} from 'framer-motion';

const Navbar = () => {

    const navlinks = <>

        <motion.li
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className="mr-4 text-white"><NavLink to='/'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
            }
        >Home</NavLink></motion.li>
        <motion.li 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className="mr-4 text-white"><NavLink to='/about'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
            }
        >About</NavLink></motion.li>
        
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

        <motion.li 
        initial={{x: -100, opacity: 0}}
        whileInView={{x: 0, opacity:1}}
        transition={{
            delay: 0.3,
            x: { type: 'spring', stiffness: 60 },
            opacity: { duration: 1 },
            ease: 'easeIn',
            duration: 1
        }}
        className=" text-white"><NavLink to='/contact'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
            }
        >Contact</NavLink></motion.li>

    </>

    return (
        <div className="navbar p-8 bg-[#0F0B19]">
            <div className="navbar-start">
               
                <motion.a
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className="text-white font-bold lg:text-3xl md:text-xl text-lg">Md. Rafiul Islam</motion.a>
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
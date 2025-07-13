import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Sticky from "react-stickynode";
import { AiOutlineMenu } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: "hero", label: "Home" },
    { to: "coreSkill", label: "Core Tech" },
    { to: "chooseMe", label: "Why Me" },
    { to: "features", label: "My Projects" },
    { to: "about", label: "About" },
    { to: "mySkills", label: "My Skills" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <Sticky enabled="true" innerZ={50}>
      <div className="navbar p-8 bg-[#0F0B19]">
        <div className="navbar-start md:w-1/4 w-full">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                  <MdClose />
                ) : (
                  <AiOutlineMenu />
                )}
              </button>
            </div>
            <ul
              tabIndex={0}
              className={ isOpen ? `menu bg-white menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow` : `hidden`}
            >
              {navItems.map((item, idx) => (
              <li
                key={item.to}
                className="cursor-pointer"
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  activeClass="font-bold border-b-2"
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
            </ul>
          </div>
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="text-white font-bold lg:text-3xl md:text-xl text-lg"
          >
            Md. Rafiul Islam
          </motion.a>
        </div>
        <div className="navbar-end md:w-3/4 max-md:hidden">
          <ul className="menu-horizontal px-1 gap-4">
            {navItems.map((item, idx) => (
              <motion.li
                key={item.to}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.3 + idx * 0.05,
                  x: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className=" text-white cursor-pointer"
              >
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  spy={true}
                  activeClass="font-bold border-b-2"
                >
                  {item.label}
                </ScrollLink>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Sticky>
  );
};

export default Navbar;

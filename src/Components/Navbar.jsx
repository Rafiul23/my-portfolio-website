import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import Sticky from 'react-stickynode';

const Navbar = () => {
  const navItems = [
    { to: "hero", label: "Home" },
    { to: "coreSkill", label: "Core Skills" },
    { to: "chooseMe", label: "Why Me" },
    { to: "features", label: "My Projects" },
    { to: "about", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <Sticky enabled='true' innerZ={50}>
        <div className="navbar p-8 bg-[#0F0B19]">
      <div className="navbar-start">
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
      <div className="navbar-end">
        <ul className="menu-horizontal px-1">
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
              className="mr-4 text-white cursor-pointer"
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

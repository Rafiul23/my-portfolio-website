import { motion } from "framer-motion";

const Navbar = () => {
  const as = (
    <>
      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mr-4 text-white"
      >
        <a
          href="#hero"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
          }
        >
          Home
        </a>
      </motion.li>
      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mr-4 text-white"
      >
        <a
          href="#coreSkill"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
          }
        >
          Core Skills
        </a>
      </motion.li>
      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mr-4 text-white"
      >
        <a
          href="#chooseMe"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
          }
        >
          Why Me
        </a>
      </motion.li>
      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mr-4 text-white"
      >
        <a
          href="#features"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
          }
        >
          My Projects
        </a>
      </motion.li>
      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="mr-4 text-white"
      >
        <a
          href="#about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2" : ""
          }
        >
          About
        </a>
      </motion.li>

      {/* <li className="mr-4 text-alpha"><a to='/projects'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Projects</a></li> */}
      {/* <li className="mr-4 text-alpha"><a to='/education'
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "font-bold underline " : ""
            }
        >Education</a></li> */}

      <motion.li
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className=" text-white"
      >
        <a
          href="#contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "font-bold border-b-2 " : ""
          }
        >
          Contact
        </a>
      </motion.li>
    </>
  );

  return (
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
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu-horizontal px-1">{as}</ul>
      </div>
    </div>
  );
};

export default Navbar;

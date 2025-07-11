import SectionTitle from "./SectionTitle";
import myPic from "../assets/rafiul1.png";

import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-bl from-[#0f0b19] to-[#142D55]">
      <SectionTitle title="About Me"></SectionTitle>

      <div className="hero min-h-screen bg-transparent">
        <div className="hero-content flex-col md:flex-row">
          <div className="">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.3,
                x: { type: "spring", stiffness: 60 },
                opacity: { duration: 1 },
                ease: "easeIn",
                duration: 1,
              }}
              src={myPic}
              className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-full shadow-2xl"
            />
          </div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="md:w-1/2 w-full p-4 space-y-2"
          >
            <h1 className="lg:text-5xl md:text-3xl text-xl text-alpha font-bold">
              Name: Md. Rafiul Islam
            </h1>
            <p className="text-xl  text-alpha">
              Objective: To work as a Front End Developer in any foreign or
              local company.{" "}
            </p>
            <p className="text-xl text-white">
              Bio: I am a MERN stack web developer. I have learned HTML, CSS,
              Javascript, Tailwind CSS, Daisyui, React and Next for front end. I
              have learned Mongodb and Express for back end development.
            </p>
            <p className="text-alpha  font-semibold">
              Education: Completed BSc. in Civil Engineering from Military
              Institute of science and Technology.
            </p>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default About;

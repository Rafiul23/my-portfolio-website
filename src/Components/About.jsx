import SectionTitle from "./SectionTitle";
import myPic from "../assets/rafiul1.png";

import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-bl from-[#0f0b19] to-[#142D55]">
      <SectionTitle title="About Me"></SectionTitle>

      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div>
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
              className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] rounded-full shadow-2xl bg-[#2f83a4]"
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
            className="lg:w-1/2 w-full p-4 space-y-5"
          >
            <h1 className="lg:text-5xl md:text-3xl text-xl text-alpha font-bold">
               Md. Rafiul Islam
            </h1>
            <p className="text-xl  text-alpha">
            Website Designer & Developer | Specialized in Medical, Hospital & Restaurant Websites | Responsive, SEO-Friendly, High-Converting Designs
            </p>
            <p className="text-xl text-white">
              About Me: I'm a web developer specializing in both code and no-code solutions. I build modern, responsive front-end interfaces using HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, React, and Next.js. On the back end, I'm proficient in MongoDB and Express.js. Additionally, I have expertise in no-code platforms like Wix and Webflow, allowing me to deliver flexible, scalable websites tailored to any business need.
            </p>
            <p className="text-alpha text-xl font-semibold">
              Education: Completed BSc. in Civil Engineering from Military
              Institute of Science and Technology.
            </p>
          </motion.div>
        </div>
      </div>

      
    </div>
  );
};

export default About;

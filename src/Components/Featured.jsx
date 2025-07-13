import SectionTitle from "./SectionTitle";
import jobHunter from "../assets/job-hunter-landing-page.png";
import glowHeaven from "../assets/glow-heaven-landing-page.png";
// import morningNews from '../assets/the-morning-post-news.jpg';
import { motion } from "framer-motion";

const Featured = () => {
  return (
    <div className="py-10 md:py-20 bg-gradient-to-br from-[#0f0b19] to-[#142D55]">
      <SectionTitle title="My Featured Projects"></SectionTitle>

      <div className="hero min-h-screen rounded-lg">
        <div className="flex mx-5 items-center flex-col gap-5 lg:flex-row">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={jobHunter}
            className="lg:w-1/2 lg:h-1/2 w-full h-full"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:w-1/2 w-full"
          >
            <div className="card-body text-white">
              <h2 className="text-2xl font-bold">
                Project Name: Job Hunter (An online job portal)
              </h2>

              <p>
                <span className="font-bold">Project Details:</span> 
                <ul className="font-semibold space-y-3 ml-4 text-lg py-4 list-decimal">
                    <li> Managed 20+ job categories with advanced search
                    and filtering options. </li>
                    <li> Enabled resume submissions and role-based
                    access control for users. </li>
                    <li> Built admin tools for job and user
                    role management using NextAuth.</li>
                </ul>
                
              </p>
              <p className="font-bold">
                Used Technologies: Next js, Tailwind, Daisyui, Next Auth,
                Mongodb, Express.
              </p>
              <div className="card-actions my-4 justify-center">
                <motion.button
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{
                    delay: 0.3,
                    x: { type: "spring", stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: "easeIn",
                    duration: 1,
                  }}
                  className="btn text-white bg-[#217389] hover:bg-[#1a5261]"
                >
                  <a href="https://job-hunter-globe.vercel.app/">
                    Click to Visit
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      

      <div className="hero min-h-screen rounded-lg">
        <div className="flex mx-5 items-center flex-col gap-5 lg:flex-row">
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={glowHeaven}
            className="lg:w-1/2 lg:h-1/2 w-full h-full"
          />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:w-1/2 w-full"
          >
             <div className="card-body text-white">
                        <h2 className="text-2xl font-bold">Project Name: Glow Heaven (An ecommerce website)</h2>
                        <p> <span className="font-bold">Project Details:</span> 
                            <ul className="font-semibold space-y-3 ml-4 text-lg py-4 list-decimal">
                                <li> Showcased 24 makeup products across six brands with diverse offerings.</li>
                                <li> Enabled secure payments, cart management, and user reviews for a seamless shopping experience.</li>
                                <li> Developed admin tools for product and user role management using React, Express, and MongoDB.</li>
                            </ul>
                            
                             
                             </p>
                        <p className="font-bold">Used Technologies: React, Tailwind CSS, Daisyui, Tanstack query, Firebase authentication, Mongodb, Express.</p>
                        <div className="card-actions my-4 justify-center">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{
                                delay: 0.3,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: 'easeIn',
                                duration: 1
                            }}
                            className="btn text-white bg-[#217389] hover:bg-[#1a5261]"><a href="https://glow-heaven.netlify.app/">Click to Visit</a></motion.button>
                        </div>
                    </div>
          </motion.div>
        </div>
      </div>

      {/* <div className="py-5 px-2 grid grid-cols-1 lg:grid-cols-3 gap-4">

                <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className="card">
                    <figure><img className="w-full h-[200px]" src={jobHunter} alt="websitecard" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: Job Hunter (An online job portal)</h2>

                        <p>Project Details: Managed 20+ job categories with advanced search and filtering options. Enabled resume submissions and role-based access control for users. Built admin tools for job and user role management using NextAuth.</p>
                        <p className="font-bold">Used Technologies: Next js, Tailwind, Daisyui, Next Auth, Mongodb, Express.</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{
                                delay: 0.3,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: 'easeIn',
                                duration: 1
                            }}
                            className="btn btn-secondary"><a href="https://job-hunter-globe.vercel.app/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>


                <motion.div 
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className="card ">
                    <figure><img className="w-full h-[200px]" src={glowHeaven} alt="website" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: Glow Heaven (An ecommerce website)</h2>
                        <p>Project Details: Showcased 24 makeup products across six brands with diverse offerings. Enabled secure payments, cart management, and user reviews for a seamless shopping experience.Developed admin tools for product and user role management using React, Express, and MongoDB.</p>
                        <p className="font-bold">Used Technologies: React, Tailwind CSS, Daisyui, Tanstack query, Firebase authentication, Mongodb, Express.</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{
                                delay: 0.3,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: 'easeIn',
                                duration: 1
                            }}
                            className="btn btn-secondary"><a href="https://glow-heaven.netlify.app/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className="card">
                    <figure><img className="w-full h-[200px]" src={morningNews} alt="website" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: The Morning Post (An online news portal)</h2>
                        <p>Project Details: This is my first team project. I designed the banner, international news section on home page, world news section, news details page, add news form and edit news form and implemented delete functionality for deleting a news. In this website, I implemented weather update and google translation feature.</p>
                        <p className="font-bold">Used Technologies: React, Tailwind, Mongodb, Express, Daisyui, Typescript.</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{
                                delay: 0.3,
                                x: { type: 'spring', stiffness: 60 },
                                opacity: { duration: 1 },
                                ease: 'easeIn',
                                duration: 1
                            }}
                            className="btn btn-secondary"><a href="https://the-morning-posts.surge.sh/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>


            </div> */}
    </div>
  );
};

export default Featured;

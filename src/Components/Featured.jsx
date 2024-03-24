import SectionTitle from "./SectionTitle";
import aesthetica from '../assets/aesthetica.jpg';
import twilight from '../assets/Twilight.jpg';
import morningNews from '../assets/the-morning-post-news.jpg';
import { motion } from 'framer-motion';

const Featured = () => {
    return (
        <div>
            <SectionTitle
                title='My Featured Projects'
            ></SectionTitle>
            <div className="py-5 px-2 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-base-200">

                <motion.div
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{delay: 0.3}}
                className="card bg-base-100 shadow-xl">
                    <figure><img src={aesthetica} alt="websitecard" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: Aesthetica (A makeup brand website)</h2>

                        <p>Project Details: This project is about makeup brand website. There are several brands of makeup products. Each brand has at least four products. A user can add a product, can update a product's details, and can delete a product. He can add product to his cart collections. He can also delete his products from his cart collection.</p>
                        <p className="font-bold">Used Technologies: React, Tailwind, Mongodb, Express, Daisyui</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{delay: 0.2}}
                            className="btn btn-secondary"><a href="https://glittering-dragon-4a6433.netlify.app/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>


                <motion.div 
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{delay: 0.3}}
                className="card bg-base-100 shadow-xl">
                    <figure><img src={twilight} alt="website" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: Twilight (An event management website)</h2>
                        <p>Project Details: I implemented firebase authentication system in this website.One can register in this website by email and password or can signin with google.The name and picture of user will be shown on navbar.User also can logout from the website. Users can contact with the owner of this website through contact form.</p>
                        <p className="font-bold">Used Technologies: React, Tailwind, Daisyui, Emailjs, Firebase authentication.</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{delay: 0.2}}
                            className="btn btn-secondary"><a href="https://heroic-semolina-7b2e02.netlify.app/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                initial={{x: -100, opacity: 0}}
                whileInView={{x: 0, opacity:1}}
                transition={{delay: 0.3}}
                className="card bg-base-100 shadow-xl">
                    <figure><img src={morningNews} alt="website" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">Project Name: The Morning Post (An online news portal)</h2>
                        <p>Project Details: This is my first team project. I designed the banner, international news section on home page, world news section, news details page, add news form and edit news form and implemented delete functionality for deleting a news. In this website, I implemented weather update and google translation feature.</p>
                        <p className="font-bold">Used Technologies: React, Tailwind, Mongodb, Express, Daisyui, Typescript.</p>
                        <div className="card-actions justify-end">
                            <motion.button 
                            initial={{ scale: 0}}
                            whileInView={{ scale:1}}
                            whileHover={{ scale: 1.2}}
                            transition={{delay: 0.2}}
                            className="btn btn-secondary"><a href="https://the-morning-posts.surge.sh/">Click to Visit</a></motion.button>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default Featured;
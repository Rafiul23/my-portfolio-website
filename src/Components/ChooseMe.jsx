import SectionTitle from "./SectionTitle";
import chooseme from '../assets/programming.jpg';
import {motion} from 'framer-motion';

const ChooseMe = () => {
    return (
        <div className="py-10 md:py-20 bg-gradient-to-tl from-[#0f0b19] to-[#142D55]">
            <SectionTitle
                title='Why Choose Me'
            ></SectionTitle>


            <div className="hero min-h-screen rounded-lg">
                <div className="hero-content flex-col gap-10 lg:flex-row">
                    <motion.img 
                    initial={{x: -100, opacity: 0}}
                    whileInView={{x: 0, opacity:1}}
                    transition={{
                        delay: 0.3,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1
                    }}
                    src={chooseme} className="lg:w-1/2 lg:h-1/2 w-full h-full" />
                    <motion.div 
                    initial={{x: 100, opacity: 0}}
                    whileInView={{x: 0, opacity:1}}
                    transition={{
                        delay: 0.3,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1
                    }}
                    className="p-4 lg:w-1/2 w-full">
                        
                        <ul className="text-alpha font-semibold space-y-3 text-lg py-4 list-disc">
                            <li>Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
                            <li>Expert at CSS framework like Tailwind css and it's component library Daisyui</li>
                            <li>Specialist in front-end framework like React and Next JS</li>
                            <li>Responsive web design and mobile optimization</li>
                            <li>Version control with Git/GitHub</li>
                            <li>Familiarity with RESTful APIs and JSON</li>
                            <li>Database management with Mongodb</li>
                            <li>State management with Tanstack Quary</li>
                            <li>Develop api with Express and Node</li>
                            <li>Design website by Wix and Webflow</li>
                        </ul>

                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default ChooseMe;
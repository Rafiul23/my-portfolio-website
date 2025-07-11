import SectionTitle from "./SectionTitle";
import chooseme from '../assets/programming.jpg';
import {motion} from 'framer-motion';

const ChooseMe = () => {
    return (
        <div className="py-10 md:py-20 bg-gradient-to-tr from-[#0f0b19] to-[#142D55]">
            <SectionTitle
                title='Why Choose Me'
            ></SectionTitle>


            <div className="hero min-h-screen rounded-lg">
                <div className="hero-content flex-col gap-10 md:flex-row">
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
                    src={chooseme} className="w-1/2 h-1/2 " />
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
                    className="p-4 md:w-1/2 w-full">
                        
                        <ul className="text-alpha font-semibold space-y-3 text-lg py-4 list-disc">
                            <li className="">Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
                            <li className="">Proficient in CSS framework like Tailwind css and it's component library Daisyui</li>
                            <li className="">Proficient in front-end framework like React</li>
                            <li className="">Responsive web design and mobile optimization</li>
                            <li className="">Version control with Git/GitHub</li>
                            <li className="">Familiarity with RESTful APIs and JSON</li>
                            <li className="">Have primary knowledge on Mongodb and Express js.</li>

                        </ul>

                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default ChooseMe;
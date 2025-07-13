import myPic from '../assets/rafiul1.png'
import bannerPic from '../assets/bg-hero.jpg'
import {motion} from 'framer-motion';

const Banner = () => {
    return (
        <div className="min-h-[400px]" style={{
            backgroundImage: `url(${bannerPic})`
        }}>
            <div className="my-[100px] flex items-center flex-col md:flex-row-reverse">
               <div className='w-1/2 flex justify-center items-center'>
               <motion.img
               initial={{x: -100, opacity: 0}}
               whileInView={{x: 0, opacity: 1}}
               transition={{
                delay: 0.3,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
               src={myPic} className="lg:w-[400px] lg:h-[400px] md:w-[300px] md:h-[300px] w-[200px] h-[200px] p-1 rounded-full bg-[#47C7F8]" />
               </div>
                <motion.div
                initial={{x: 100, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className='md:w-1/2 max-md:text-center max-md:pt-5 w-full md:pl-10 px-2'>
                    <h1 className="lg:text-5xl md:text-3xl text-xl pt-2 text-white font-bold">Hi there!</h1>
                    <h1 className="lg:text-5xl md:text-4xl text-3xl pt-2 text-white font-bold">I am Rafiul</h1>
                    <p className="py-6 lg:text-3xl md:text-2xl text-xl font-bold text-white">MERN Stack Web Developer | Wix Developer | Webflow Developer</p>
                    <motion.button 
                    initial={{x: 0, scale: 0}}
                    whileInView={{x: 0, scale:1}}
                    whileHover={{x: 0, scale: 1.2}}
                    transition={{
                        delay: 0.3,
                        x: { type: 'spring', stiffness: 60 },
                        opacity: { duration: 1 },
                        ease: 'easeIn',
                        duration: 1
                    }}
                    className="btn text-white bg-[#217389] hover:bg-[#1a5261]"><a href='md_rafiul_islam_resume.pdf' download>Download my Resume</a></motion.button>
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {motion} from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-[#010729] text-primary-content">
            <motion.aside
            initial={{x: -100, scale: 0}}
            whileInView={{x: 0, scale:1}}
            transition={{
                delay: 0.3,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
            >

                <h2 className="font-bold md:text-3xl text-xl text-alpha">
                    Md. Rafiul Islam
                </h2>
                <p className="pt-4">I am available on</p>
            </motion.aside>
            <motion.nav
            initial={{x: 100, scale: 0}}
            whileInView={{x: 0, scale:1}}
            
            transition={{
                delay: 0.3,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
            >
                <div className="flex gap-3">
                    <a target="_blank" className="text-2xl hover:text-[#217389]" href="https://www.facebook.com/rafiulislam.shaon.5"><FaFacebookF /></a>
                    <a target="_blank" className="text-2xl hover:text-[#217389]" href="https://www.linkedin.com/in/rafiulshaon/"><FaLinkedin /></a>
                    <a target="_blank" className="text-2xl hover:text-[#217389]" href="https://github.com/rafiul23/"><FaGithub /></a>
                    <a target="_blank" className="text-2xl hover:text-[#217389]" href="https://www.instagram.com/rafiul_shaon/"><FaInstagram /></a>
                    <a target="_blank" className="text-2xl hover:text-[#217389]" href="https://x.com/Rafiul_Shaon"><FaXTwitter /></a>
                </div>
                <p className="mt-2">Copyright © 2025 - All right reserved</p>
            </motion.nav>
        </footer>
    );
};

export default Footer;
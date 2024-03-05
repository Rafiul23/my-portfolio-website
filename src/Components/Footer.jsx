import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-black text-primary-content">
            <aside>

                <p className="font-bold text-3xl text-alpha">
                    Md. Rafiul Islam
                </p>
                <p>Copyright © 2024 - All right reserved</p>
                <p>I am available on</p>
            </aside>
            <nav>
                <div className="grid grid-cols-3 gap-3">
                    <a target="_blank" className="text-2xl" href="https://www.facebook.com/rafiulislam.shaon.5"><FaFacebookF /></a>
                    <a target="_blank" className="text-2xl" href="https://www.linkedin.com/in/md-rafiul-islam-645681112/"><FaLinkedin /></a>
                    <a target="_blank" className="text-2xl" href="https://github.com/rafiul23/"><FaGithub /></a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;
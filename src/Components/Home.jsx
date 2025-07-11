import About from "./About";
import Banner from "./Banner";
import ChooseMe from "./ChooseMe";
import Contact from "./Contact";
import Featured from "./Featured";
import Skills from "./Skills";
import Teechnology from "./Teechnology";
import { Element } from "react-scroll";


const Home = () => {
    return (
        <div>
            <Element name='hero'>
            <Banner></Banner>
            </Element>
            <Element name='coreSkill'>
            <Teechnology></Teechnology>
            </Element>
            <Element name='chooseMe'> 
            <ChooseMe></ChooseMe>
            </Element>
            <Element name="features">
            <Featured></Featured>
            </Element>
            <Element name="about">
            <About></About>
            </Element>
            <Element name="mySkills">
            <Skills></Skills>
            </Element>
            <Element name="contact">
            <Contact></Contact>
            </Element>
        </div>
    );
};

export default Home;
import SectionTitle from "./SectionTitle";
import myPic from '../assets/rafiul1.png';

const About = () => {
    return (
        <div>
            <SectionTitle
            title='About Me'
            ></SectionTitle>
            <div className="flex justify-between items-center">
            <h2 className="text-3xl text-alpha font-bold">Name: Md. Rafiul Islam</h2>
            <img src={myPic} alt="" className="w-[80px] h-[80px] rounded-full"/>
            </div>
            <p className="text-xl font-bold px-2">Bio: I am a front end focused MERN stack web developer. I have learned HTML, CSS, javascript, Tailwind css with Daisyui, and React. Currently, I am learning back end development.</p>
            <p className="text-xl px-2 font-bold text-alpha">Objective: To work as a React developer in any foreign or local company. </p>
            <p className="text-xl px-2 font-bold">My skills:</p>
            <ul className="font-bold ml-4">
                <li>1. HTML5</li>
                <li>2. CSS3</li>
                <li>3. Javascript with ES6</li>
                <li>4. Tailwind CSS</li>
                <li>5. Daisyui</li>
                <li>6. Bootstrap5</li>
                <li>7. React</li>
                <li>8. Mongodb</li>
                <li>9. Express js</li>
                <li>10. Node js</li>
            </ul>
           
            <p className="text-alpha px-2 font-bold">Education: Completed B sc. in CE from Military Institute of science and Technology.</p>
           
        </div>
    );
};

export default About;
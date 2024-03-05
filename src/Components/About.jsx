import SectionTitle from "./SectionTitle";
import myPic from '../assets/rafiul1.png';

const About = () => {
    return (
        <div>
            <SectionTitle
                title='About Me'
            ></SectionTitle>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="">
                    <img src={myPic} className="w-[400px] h-[400px] rounded-full shadow-2xl" />
                    </div>
                    <div className="w-1/2 p-4">
                        <h1 className="text-5xl text-alpha font-bold">Name: Md. Rafiul Islam</h1>
                        <p className="text-xl p-2 text-alpha">Objective: To work as a React developer in any foreign or local company. </p>
                        <p className="text-xl p-2">Bio: I am a front end focused MERN stack web developer. I have learned HTML, CSS, javascript, Tailwind css with Daisyui, and React. Currently, I am learning back end development.</p>
                        <p className="text-alpha p-2 font-semibold">Education: Completed BSc. in Civil Engineering from Military Institute of science and Technology.</p>
                    </div>
                </div>
            </div>
            
            
            
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

           

        </div>
    );
};

export default About;
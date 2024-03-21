import SectionTitle from "./SectionTitle";
import chooseme from '../assets/chooseme.png';

const ChooseMe = () => {
    return (
        <div className="mt-5">
            <SectionTitle
                title='Why Choose Me'
            ></SectionTitle>


            <div className="hero min-h-screen bg-gradient-to-r from-slate-700 to-slate-800 border border-alpha rounded-lg">
                <div className="hero-content flex-col md:flex-row">
                    <img src={chooseme} className="md:w-1/2 w-full rounded-full " />
                    <div className="p-4 md:w-1/2 w-full">
                        
                        <ul className="text-alpha font-semibold space-y-3 text-lg py-4 list-disc">
                            <li className="">Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
                            <li className="">Proficient in CSS framework like Tailwind css and it's component library Daisyui</li>
                            <li className="">Proficient in front-end framework like React</li>
                            <li className="">Responsive web design and mobile optimization</li>
                            <li className="">Version control with Git/GitHub</li>
                            <li className="">Familiarity with RESTful APIs and JSON</li>
                            <li className="">Have primary knowledge on Mongodb and Express js.</li>

                        </ul>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default ChooseMe;
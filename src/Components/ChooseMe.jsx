import SectionTitle from "./SectionTitle";


const ChooseMe = () => {
    return (
        <div>
            <SectionTitle
            title='Why Choose Me'
            ></SectionTitle>

            <ul className="font-bold space-y-3 text-2xl py-4">
                <li className="bg-alpha text-white pl-2">Proficient in HTML5, CSS3, JavaScript (ES6+)</li>
                <li className="text-alpha">Proficient in CSS framework like Tailwind css and it's component library Daisyui</li>
                <li className="bg-alpha text-white pl-2">Proficient in front-end framework like React</li>
                <li className="text-alpha">Responsive web design and mobile optimization</li>
                <li className="bg-alpha text-white pl-2">Version control with Git/GitHub</li>
                <li className="text-alpha">Familiarity with RESTful APIs and JSON</li>
                <li className="bg-alpha text-white pl-2">Have primary knowledge on Mongodb and Express js.</li>
                
            </ul>
        </div>
    );
};

export default ChooseMe;
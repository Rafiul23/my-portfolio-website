import SectionTitle from "./SectionTitle";
import TechCard from "./TechCard";
import reactImg from '../assets/react-logo.png';
import mongodbImg from '../assets/MongoDB-Emblem.jpg';
import expressImg from '../assets/Express-clothing-retailer-Logo.png';
import nodeImg from '../assets/node-js-icon-1901x2048-mk1e13df.png'; 


const Teechnology = () => {
    return (
        <div>
            <SectionTitle
            title='Core Technologies I know'
            ></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <TechCard
                img={reactImg}
                title='React'
                description='A javascript library for front end development'
                ></TechCard>
                <TechCard
                img={mongodbImg}
                title='Mongodb'
                description='A database used for storing data'
                ></TechCard>
                <TechCard
                img={expressImg}
                title='Express js'
                description='A framework of node js for building api, server and backend development'
                ></TechCard>
                <TechCard
                img={nodeImg}
                title='Node js'
                description='A run time environment'
                ></TechCard>
            </div>

        </div>
    );
};

export default Teechnology;
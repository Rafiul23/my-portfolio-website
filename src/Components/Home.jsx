import Banner from "./Banner";
import ChooseMe from "./ChooseMe";
import Featured from "./Featured";
import Teechnology from "./Teechnology";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Teechnology></Teechnology>
            <ChooseMe></ChooseMe>
            <Featured></Featured>
        </div>
    );
};

export default Home;
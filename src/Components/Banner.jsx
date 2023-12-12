import myPic from '../assets/rafiul1.png'
import bannerPic from '../assets/artwork-7182495.jpg'

const Banner = () => {
    return (
        <div className="min-h-[400px] border" style={{
            backgroundImage: `url(${bannerPic})`
        }}>
            <div className="my-[100px] flex items-center flex-col lg:flex-row-reverse">
               <div className='w-1/2 flex justify-center items-center'>
               <img src={myPic} className="w-[300px] h-[300px] p-1 rounded-full border bg-[#ede8ad]" />
               </div>
                <div className='w-1/2 text-center '>
                    <h1 className="text-5xl text-alpha font-bold">Hi! I am Rafiul</h1>
                    <p className="py-6 text-3xl font-bold text-[#b895cf]">A front end focused MERN stack web developer.<br/> Download my resume <br/> by clicking the following button</p>
                    <button className="btn text-white bg-alpha">Download my Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
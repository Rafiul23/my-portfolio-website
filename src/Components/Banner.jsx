import myPic from '../assets/rafiul1.png'
import bannerPic from '../assets/artwork-7182495.jpg'

const Banner = () => {
    return (
        <div className="min-h-[400px] border" style={{
            backgroundImage: `url(${bannerPic})`
        }}>
            <div className="my-[100px] flex items-center flex-col lg:flex-row-reverse">
               <div className='w-1/2 flex justify-center items-center'>
               <img src={myPic} className="md:w-[300px] md:h-[300px] h-[200px] w-[200px] p-1 rounded-full border bg-[#ede8ad]" />
               </div>
                <div className='w-1/2 text-center '>
                    <h1 className="lg:text-5xl md:text-3xl text-2xl text-alpha font-bold">Hi! I am Rafiul</h1>
                    <p className="py-6 lg:text-3xl md:text-2xl text-xl font-bold text-[#b895cf]">A front end focused MERN stack web developer.</p>
                    <button className="btn text-white bg-alpha"><a href='md_rafiul_islam_resume.pdf' download>Download my Resume</a></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
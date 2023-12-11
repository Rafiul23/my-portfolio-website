import myPic from '../assets/rafiul1.png'

const Banner = () => {
    return (
        <div className="min-h-[400px] border" style={{
            background: 'radial-gradient(steelBlue, pink )'
        }}>
            <div className="my-[100px] flex items-center flex-col lg:flex-row-reverse">
               <div className='w-1/2 flex justify-center items-center'>
               <img src={myPic} className="w-[300px] h-[300px] rounded-full border bg-alpha border-alpha shadow-lg shadow-alpha" />
               </div>
                <div className='w-1/2 text-center '>
                    <h1 className="text-5xl text-alpha font-bold">Hi! I am Rafiul</h1>
                    <p className="py-6 text-2xl font-bold text-white">I am a MERN stack web developer.<br/>I can develope website by <br/> Mongodb, Express, React and Node.</p>
                    <button className="btn bg-alpha text-white">Download my Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
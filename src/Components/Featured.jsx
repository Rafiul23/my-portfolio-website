import SectionTitle from "./SectionTitle";


const Featured = () => {
    return (
        <div>
            <SectionTitle
            title='My Featured Projects'
            ></SectionTitle>
           <div className="py-4">
           <h2 className="text-2xl font-bold">Project Name: Aesthetica (A makeup brand website)</h2>
            <p className="font-bold">link: <a className="text-blue-600 underline" href="https://6533e1ead9bdce30108c9785--glittering-dragon-4a6433.netlify.app/">click here</a></p>
            <p>Project details: This project is about makeup brand website. There are several brands of makeup products. Each brand has at least four products. A user can add a product, can update a product's details, and can delete a product. He can add product to his cart collections. He can also delete his products from his cart collection.</p>
            <p className="font-bold">Used language: React, Tailwind, Mongodb, Express, Daisyui</p>
           </div>

           <div className="py-4">
           <h2 className="text-2xl font-bold">Project Name: Job Hut (A job market website)</h2>
            <p className="font-bold">link: <a className="text-blue-600 underline" href="https://dapper-centaur-413cf9.netlify.app/">click here</a></p>
            <p>Project details: This project is about job market website. There are several number of jobs in the website. A candidate can search a job, and can apply in a job.He can post a job, can update a job data, and also can delete a job.</p>
            <p className="font-bold">Used language: React, Tailwind, Mongodb, Express, Daisyui</p>
           </div>
           <div className="py-4">
           <h2 className="text-2xl font-bold">Project Name: Neuro Lab (A diagnostic center management website)</h2>
            <p className="font-bold">link: <a className="text-blue-600 underline" href="https://musical-biscotti-6995f8.netlify.app/">click here</a></p>
            <p>Project details: This project is about diagnostic center management website. There are several number of tests. A patient can book a test and can pay his charge by stripe payment system. A coupon code can be applied to get a discount. In this website, an admin can post a test, can update a test data and also can delete a test. He can also delete a user, can block a user and also can activate a user.</p>
            <p className="font-bold">Used language: React, Tailwind, Mongodb, Express, Daisyui</p>
           </div>
        </div>
    );
};

export default Featured;
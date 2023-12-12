import React from 'react';

const TechCard = ({ img, title, description }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={img} className='w-full h-[250px]' alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-alpha">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TechCard;
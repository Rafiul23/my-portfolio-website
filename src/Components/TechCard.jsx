import { motion } from 'framer-motion'

const TechCard = ({ img, title, description }) => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.3,
                x: { type: 'spring', stiffness: 60 },
                opacity: { duration: 1 },
                ease: 'easeIn',
                duration: 1
            }}
            className="card bg-transparent shadow-xl">
            <figure><img src={img} className='w-[50px] h-[50px] p-2' alt="image" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-white">{title}</h2>
                <p className='text-white'>{description}</p>
            </div>
        </motion.div>
    );
};

export default TechCard;
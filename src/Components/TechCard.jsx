import { motion } from 'framer-motion'

const TechCard = ({ img, title, description }) => {
    return (
        <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="card bg-base-100 shadow-xl">
            <figure><img src={img} className='w-[100px] h-[100px] p-2' alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-alpha">{title}</h2>
                <p>{description}</p>
            </div>
        </motion.div>
    );
};

export default TechCard;
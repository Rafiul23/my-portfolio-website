import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => {
    return (
        <div>
            <motion.h2
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 0.3,
                    x: { type: 'spring', stiffness: 60 },
                    opacity: { duration: 1 },
                    ease: 'easeIn',
                    duration: 1
                }}
                className="text-center my-4 p-4 lg:text-4xl md:text-3xl text-2xl font-bold text-alpha">{title}</motion.h2>
        </div>
    );
};

export default SectionTitle;
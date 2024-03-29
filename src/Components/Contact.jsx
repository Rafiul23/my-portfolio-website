import SectionTitle from './SectionTitle';
import contact from '../assets/contact.png';
import {motion} from 'framer-motion';

const Contact = () => {

    return (
        <div>
            <SectionTitle
                title='Contact Me'
            ></SectionTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <motion.img
                     initial={{ x: -50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{
                         delay: 0.3,
                         x: { type: 'spring', stiffness: 60 },
                         opacity: { duration: 1 },
                         ease: 'easeIn',
                         duration: 1
                     }}
                    src={contact} className="md:w-1/2 w-full rounded-lg shadow-xl" />
                    <motion.div
                     initial={{ x: 50, opacity: 0 }}
                     whileInView={{ x: 0, opacity: 1 }}
                     transition={{
                         delay: 0.3,
                         x: { type: 'spring', stiffness: 60 },
                         opacity: { duration: 1 },
                         ease: 'easeIn',
                         duration: 1
                     }}
                    className='md:w-1/2 w-full'>
                        <h1 className="lg:text-5xl md:text-3xl text-xl pl-4 text-alpha font-bold">Contact with me via:</h1>
                        <div className='space-y-2 p-4 mt-2 font-semibold'>
                        <p>Email: <span className='text-blue-600'>rislamshaon95@gmail.com</span></p>
                        <p>Phone: <span className='text-blue-600'>01980114434</span></p>
                        <p>Facebook: <a target='_blank' className='text-blue-600' href="https://www.facebook.com/rafiulislam.shaon.5">Rafiul Islam Shaon</a></p>
                        <p>LinedIn: <a target='_blank' className='text-blue-600' href="https://www.linkedin.com/in/md-rafiul-islam-645681112/">Md. Rafiul Islam</a></p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
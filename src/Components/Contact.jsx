import SectionTitle from './SectionTitle';
import contact from '../assets/contact.png';

const Contact = () => {

    return (
        <div>
            <SectionTitle
                title='Contact Me'
            ></SectionTitle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={contact} className="w-1/2 rounded-lg shadow-xl" />
                    <div className='w-1/2 '>
                        <h1 className="text-5xl pl-4 text-alpha font-bold">Contact with me!</h1>
                        <div className='space-y-2 p-4 mt-2 font-semibold'>
                        <p>Email: <span className='text-blue-600'>rislamshaon95@gmail.com</span></p>
                        <p>Phone: <span className='text-blue-600'>01980114434</span></p>
                        <p>Facebook: <a target='_blank' className='text-blue-600' href="https://www.facebook.com/rafiulislam.shaon.5">Rafiul Islam Shaon</a></p>
                        <p>LinedIn: <a target='_blank' className='text-blue-600' href="https://www.linkedin.com/in/md-rafiul-islam-645681112/">Md. Rafiul Islam</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
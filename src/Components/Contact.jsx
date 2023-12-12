import Swal from "sweetalert2";
import SectionTitle from './SectionTitle';


const Contact = () => {
    const handleMessage = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const message = e.target.message.value;

        e.target.name.value = '';
        e.target.message.value = '';

        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message is delivered",
            showConfirmButton: false,
            timer: 1500
          });
    }
    return (
        <div>
            <SectionTitle
            title='Contact Me'
            ></SectionTitle>
            <div className="bg-base-200 w-1/2 my-5 mx-auto p-4">
           <form  onSubmit={handleMessage}>
            <h2 className="text-alpha font-bold text-3xl ">Your Name: </h2>
                <input type="text" placeholder="Your Name" name="name" className="border p-4 block my-4 w-full" required />
                <br />
                <h2 className="text-alpha font-bold text-3xl">Your Message: </h2>
                <textarea name="message" id="message" placeholder="Your message" className="border p-4 block my-4 w-full" cols="30" rows="10"></textarea>

                <button className="btn btn-block bg-alpha text-white">Submit</button>
            </form>
           </div>
        </div>
    );
};

export default Contact;
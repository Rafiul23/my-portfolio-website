import SectionTitle from "./SectionTitle";
import contact from "../assets/programming.jpg";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const handleMessage = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_eibkkki",
        "template_oqv8tdh",
        form.current,
        "ZgETNhSwshb0uW9yr"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your email has been sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
            
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            showConfirmButton: true,
            footer: "Try Again Later!",
          });
        }
      );

    e.target.reset();
  };

  return (
    <div className="py-10 md:py-20 bg-gradient-to-bl from-[#0f0b19] to-[#142D55]">
      <SectionTitle title="Contact Me"></SectionTitle>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            src={contact}
            className="lg:w-1/2 w-full rounded-lg shadow-xl"
          />
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.3,
              x: { type: "spring", stiffness: 60 },
              opacity: { duration: 1 },
              ease: "easeIn",
              duration: 1,
            }}
            className="lg:w-1/2 w-full"
          >
            <form ref={form} onSubmit={handleMessage}>
              <div className="flex max-md:flex-col gap-5">
                <div className="w-full">
                  <h2 className="text-white font-bold text-xl ">Your Name: </h2>
                  <input
                    type="text"
                    placeholder="Type Your Name"
                    name="user_name"
                    className="border p-4 block my-4 w-full rounded-xl"
                    required
                  />
                </div>
                <div className="w-full">
                  <h2 className="text-white font-bold text-xl ">
                    Your Email:{" "}
                  </h2>
                  <input
                    type="email"
                    placeholder="Type Your Email"
                    name="user_email"
                    className="border p-4 block my-4 w-full rounded-xl"
                    required
                  />
                </div>
              </div>
              <br />
              <h2 className="text-white font-bold text-xl">Your Message: </h2>
              <textarea
                name="message"
                id="message"
                placeholder="Type Your Message"
                className="border p-4 rounded-xl block my-4 w-full"
                cols="30"
                rows="10"
              ></textarea>

              <button className="btn btn-block bg-[#010729] hover:bg-[#4d5aa4] text-white">
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

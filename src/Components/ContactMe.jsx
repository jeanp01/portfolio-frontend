import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

import "./ContactMe.css";
const ContactmMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hjy7xtr",
        "template_qbecks5",
        form.current,
        "wdYtI2BJ4GJK2OsZA"
      )
      .then(
        (result) => {
          alert("Mensaje enviado");
          console.log(result.text);
        },
        (error) => {
          alert("mensaje no enviado");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="ContactMe"
      className="relative bg-white dark:bg-bgcontact dark:text-light1 "
    >
      <div className="lg:grid md:h-screen  lg:grid-cols-12">
        <motion.section
          id="Ctext"
          className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
        >
          <img
            alt="code"
            src="/images/codebinarie.jpg"
            className="binarie absolute inset-0 h-full w-full object-cover "
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <h2 className="mt-6 text-3xl font-arvo font-bold text-red-500 sm:text-3xl md:text-4xl">
              Contact Me
            </h2>

            <p className="md:pb-0 mt-4 text-2xl font-rokkitt leading-relaxed text-white/90">
              If you want to make your projects and ideas a reality, do not
              hesitate to contact me to start taking the first step together.{" "}
            </p>
          </div>
        </motion.section>

        <motion.main
          id="Cemail"
          className="md:pt-0 flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
        >
          <div className="max-w-xl lg:max-w-3xl">
            <div className=" py-16 relative -mt-16 block lg:hidden">
              <h1 className="pt-8 font-bold text-5xl md:text-6xl font-arvo text-left  pb-6 md:pb-10">
                Contact Me
              </h1>

              <p className=" md:mt-4 md:block font-rokkitt text-left text-xl  md:text-2xl">
                If you want to make your projects and ideas a reality, do not
                hesitate to contact me to start taking the first step together.
              </p>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              action="#"
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block  text-xl font-dosis font-bold text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  name="user_name"
                  className="outline-none border-b border-gray-300  border-none shadow-md rounded-lg p-1 mt-2 w-full border-gray-200  focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block  text-xl font-dosis font-bold text-gray-700"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  name="user_email"
                  className="outline-none border-b border-gray-300  border-none shadow-md rounded-lg p-1 mt-2 w-full border-gray-200  focus:border-blue-500 focus:ring focus:ring-blue-200"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="OrderNotes" className="sr-only">
                  Order Notes
                </label>
                <div className="overflow-hidden">
                  <textarea
                    name="message"
                    className=" outline-none resize-none font-dosis font-bold border-b border-gray-300  border-none shadow-md rounded-lg p-1 mt-2 w-full border-gray-200  focus:border-blue-500 focus:ring focus:ring-blue-200"
                    id="OrderNotes"
                    cols="30"
                    rows="4"
                    placeholder="Message..."
                  ></textarea>
                </div>
              </div>

              <div className="col-span-6"></div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.1 }}
                  drag="x"
                  dragConstraints={{ left: -100, right: 100 }}
                  className="  font-rokkitt text-xl inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3  font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                >
                  Send Message
                </motion.button>
              </div>
            </form>
          </div>
        </motion.main>
      </div>
    </section>
  );
};

export default ContactmMe;

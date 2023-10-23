import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const AboutMe = () => {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 250) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="AboutMe"
      className=" md:h-screen grid    overflow-hidden bg-light2 dark:bg-darkbg dark:text-light2  sm:grid sm:grid-cols-2 sm:items-center"
    >
      <motion.img
        initial={{ x: 700 }}
        animate={{ x: expanded ? 0 : 700 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        alt="setup"
        src="/images/descargar (1).jpeg"
        className="min-h-screen hidden sm:block md:h-full md:w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]"
      />

      <motion.div
        initial={{ x: -700 }}
        animate={{ x: expanded ? 0 : 700 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className=" py-20 p-8 md:p-12 lg:px-16 lg:py-24"
      >
        <div className=" mx-auto max-w-xl text-center ltr:sm:text-left ">
          <h2 className="-mt-50 pt-2 md:pt-8 font-bold text-5xl md:text-6xl font-arvo md:text-right  pb-6 md:pb-10">
            About Me
          </h2>

          <p className="-mt-50 md:mt-4 md:block font-rokkitt md:text-right text-xl  md:text-2xl ">
            I have always liked to understand how things are created, since I
            was a child. When I discovered programming, I found a way to combine
            my creativity with my taste for technology. I love the challenge of
            solving problems and creating solutions that are useful to others.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;

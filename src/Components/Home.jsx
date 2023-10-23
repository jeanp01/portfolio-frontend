import { useEffect, useState } from "react";
import "./Home.css";
import { motion } from "framer-motion";

const Home = () => {
  const [expanded, setExpanded] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
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
      id="Home"
      className="  min-h-screen md:flex-row  overflow-hidden bg-light3 dark:bg-darkbg dark:text-light2  sm:grid sm:grid-cols-2 sm:items-center"
    >
      <motion.div
        initial={{ x: -700 }}
        animate={{ x: expanded ? -700 : 0 }}
        exit={{ x: -200, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=" py-20 p-8 md:p-12 lg:px-16 lg:py-24"
      >
        <div className=" mx-auto max-w-xl text-center ltr:sm:text-left ">
          <h2 className="pt-8 font-bold text-5xl md:text-6xl font-arvo md:text-left  pb-6 md:pb-10 ">
            Leyva
          </h2>

          <p className="  md:mt-4 md:block font-rokkitt md:text-left text-xl  md:text-2xl">
            <strong>Software Developer,</strong> <br /> with one year of
            experience but with a desire to learn and grow specialized in the
            frontend side, with about a year of experience
          </p>
        </div>
      </motion.div>

      <motion.img
        initial={{ x: 700 }}
        animate={{ x: expanded ? 700 : 0 }}
        exit={{ x: 200, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        alt="imgdeveloper"
        src="/images/descargar (1)-modified (1).jpeg"
        className=" h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
  );
};

export default Home;

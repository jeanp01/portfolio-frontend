const Footer = () => {
  return (
    <footer id="Ftext" className=" bg-darkbg dark:bg-light2  ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="dark svg"
        viewBox="0 0 1440 320"
      >
        <path
          opacity="1"
          d="M0,192L60,208C120,224,240,256,360,234.7C480,213,600,139,720,90.7C840,43,960,21,1080,26.7C1200,32,1320,64,1380,80L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className=" dark:text-darkbg text-light1 mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <p className=" md:mt-0 md:block font-rokkitt text-center text-xl  md:text-2xl">
          If you liked my work, do not hesitate to contact me, I will be willing
          to help you with any project you have in mind.
        </p>

        <ul className=" mt-20 mb-20   flex flex-wrap justify-center gap-6 md:gap-8 md:gap-22">
          <li className="md:px-18">
            <a
              className="dark:text-darkbg text-light2   hover:text-gray-700/75 dark:hover:text-gray-700/75  "
              href="#Home"
            >
              Home
            </a>
          </li>

          <li className="md:px-20">
            <a
              className="dark:text-darkbg text-light2   hover:text-gray-700/75 dark:hover:text-gray-700/75"
              href="#AboutMe"
            >
              About Me
            </a>
          </li>

          <li className="md:px-20">
            <a
              className="dark:text-darkbg text-light2 hover:text-gray-700/75 dark:hover:text-gray-700/75"
              href="#Projects"
            >
              Projects
            </a>
          </li>

          <li className="md:px-18">
            <a
              className="dark:text-darkbg text-light2   hover:text-gray-700/75 dark:hover:text-gray-700/75"
              href="#ContactMe"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

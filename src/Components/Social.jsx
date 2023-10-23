import "./Social.css";
import { motion } from "framer-motion";

const Social = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      className="h-10 mx-auto grid items-center fixed bottom-0  w-full bg-light1  dark:bg-darkbg dark:text-light2 text-md md:text-xl"
    >
      <marquee direction="left">
        <nav
          className="px-6 md:px-8 md:pt-1.5 w-full block "
          id="navbar-default"
        >
          <ul className="flex flex-row  md:p-0 mt-1.5 rounded-lg   space-x-8 border-0 md:bg-light1 dark:bg-darkbg ">
            <li className="px-6 md:px-16">
              <a
                href="https://github.com/jeanp01"
                className=" flex py-2 pl-3 pr-4  rounded"
              >
                Github
                <img
                  className="github w-1/2 top-0 aspect-video object-contain px-2 h-1/2"
                  src="/images/github.png"
                  alt="Github"
                />
              </a>
            </li>
            <li className="px-8">
              <a
                href="https://www.linkedin.com/in/jean-portilla-513061268/"
                className=" flex  py-2 pl-3 pr-4  rounded "
              >
                Linkedin
                <img
                  className="w-1/2 aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </li>
            <li className="px-8">
              <a
                href="mailto:jeanportilla01@gmail.com"
                className="flex py-2 pl-3 pr-4  rounded"
              >
                Gmail
                <img
                  className="w-1/2 aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/gmail.png"
                  alt="Gmail"
                />
              </a>
            </li>
            <li className="  px-8">
              <a
                href="https://api.whatsapp.com/send?phone=902621205"
                className="flex py-2 pl-3 pr-4  rounded"
              >
                Whatsapp
                <img
                  className="aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/whatsapp.png"
                  alt="Whatsapp"
                />
              </a>
            </li>
            <li className="px-6 md:px-16">
              <a
                href="https://github.com/jeanp01"
                className=" flex py-2 pl-3 pr-4  rounded"
              >
                Github
                <img
                  className=" github w-1/2 top-0 aspect-video object-contain px-2 h-1/2"
                  src="/images/github.png"
                  alt="Github"
                />
              </a>
            </li>
            <li className="px-8">
              <a
                href="https://www.linkedin.com/in/jean-portilla-513061268/"
                className=" flex  py-2 pl-3 pr-4  rounded "
              >
                Linkedin
                <img
                  className="w-1/2 aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/linkedin.png"
                  alt="Linkedin"
                />
              </a>
            </li>
            <li className="px-8">
              <a
                href="mailto:jeanportilla01@gmail.com"
                className="flex py-2 pl-3 pr-4  rounded"
              >
                Gmail
                <img
                  className="w-1/2 aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/gmail.png"
                  alt="Gmail"
                />
              </a>
            </li>
            <li className="  px-8">
              <a
                href="https://api.whatsapp.com/send?phone=902621205"
                className="flex py-2 pl-3 pr-4  rounded"
              >
                Whatsapp
                <img
                  className="aspect-video object-contain top-0 px-2 h-1/2"
                  src="/images/whatsapp.png"
                  alt="Whatsapp"
                />
              </a>
            </li>
          </ul>
        </nav>
      </marquee>
    </motion.div>
  );
};

export default Social;

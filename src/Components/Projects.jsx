import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section
      id="Projects"
      className="bg-light3 dark:bg-darkbg dark:text-light2 w-full md:pt-14 md:pb-14 pr-4 pl-4  flex "
    >
      <div
        id="Ptext"
        className=" grid grid-cols-1 w-auto md:grid-cols-3 grid-rows-2    px-4 py-4 md:py-0   gap-4"
      >
        <div className=" inline-block place-items-stretch">
          <h2 className="md:pt-4 pt-10 h-40 md:h-20 text-center md:text-left font-bold text-5xl md:text-5xl font-arvo  ">
            Projects
          </h2>
          <p className=" md:block pt-4 text-center font-rokkitt md:text-left text-xl  md:text-2xl">
            Projects carried out during my study process, with each technology
            used for creation
          </p>
        </div>

        <motion.article
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          id="Pimg"
          className="group"
        >
          <img
            alt="RICKMORTY"
            src="/images/RICKMORTY.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="https://rickandmorty-jean.netlify.app/">
              <h3 className="pb-2 text-xl font-medium  font-arvo text-gray-900">
                RICK AND MORTY
              </h3>
              <a
                className="font-arvo text-md font-bold"
                href="https://github.com/jeanp01/RICK-MORTY"
              >
                Github
              </a>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500 font-dosis font-extrabold">
              <ul>
                <li>.REACT JS</li>
                <li>.TAILWINDCSS</li>
              </ul>
            </p>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          className="group "
        >
          <img
            alt="carrito"
            src="/images/carrito.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4 ">
            <a href="https://fundamentos-carrito-jean.netlify.app/">
              <h3 className="pb-2 text-xl font-medium  font-arvo text-gray-900">
                MARKETPLACE
              </h3>
              <a
                className="font-arvo text-md font-bold"
                href="https://github.com/jeanp01/carrito-de-compras-academlo"
              >
                Github
              </a>
            </a>

            <p className=" col-span-2 mt-2 line-clamp-3 text-sm/relaxed font-dosis font-bold text-gray-500">
              <ul>
                <li>.HTML5</li>
                <li>.CSS3</li>
                <li>.JAVASCRIPT</li>
              </ul>
            </p>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          id="Pimg"
          className="group article"
        >
          <img
            alt="clima"
            src="/images/clima.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
          />

          <div className="p-4">
            <a href="https://app-clima-jean.netlify.app/">
              <h3 className="pb-2 text-xl font-medium  font-arvo text-gray-900">
                INFO CLIMA
              </h3>
              <a
                className="font-arvo text-md font-bold"
                href="https://github.com/jeanp01/proyecto-clima"
              >
                Github
              </a>
            </a>

            <p className="col-span-2 mt-2 line-clamp-3 text-sm/relaxed font-dosis font-bold text-gray-500">
              <ul>
                <li>.REACTJS</li>
                <li>.TAILWINDCSS</li>
              </ul>
            </p>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          id="Pimg"
          className="group article"
        >
          <img
            alt="crud"
            src="/images/crud.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] "
          />

          <div className="p-4">
            <a href="https://users-jean.netlify.app/">
              <h3 className="pb-2 text-xl font-medium  font-arvo text-gray-900">
                CRUD
              </h3>
              <a
                className="font-arvo text-md font-bold"
                href="https://github.com/jeanp01/users"
              >
                Github
              </a>
            </a>

            <p className=" col-span-2 mt-2 line-clamp-3 text-sm/relaxed font-dosis font-bold text-gray-500">
              <ul>
                <li>.REACT JS</li>
                <li>.TAILWINDCSS</li>
              </ul>
            </p>
          </div>
        </motion.article>

        <motion.article
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
          id="Pimg"
          className="group article"
        >
          <img
            alt="infogalax"
            src="/images/infogalax.png"
            className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%] "
          />

          <div className="p-4">
            <a href="https://frase-cosmica.netlify.app/">
              <h3 className="pb-2 text-xl font-medium  font-arvo text-gray-900">
                INFOGALAX
              </h3>
              <a
                className="font-arvo text-md font-bold"
                href="https://github.com/jeanp01/frases-espacio"
              >
                Github
              </a>
            </a>

            <p className=" col-span-2 mt-2 line-clamp-3 text-sm/relaxed font-dosis font-bold text-gray-500">
              <ul>
                <li>.REACT JS</li>
                <li>.CSS3</li>
              </ul>
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
};

export default Projects;

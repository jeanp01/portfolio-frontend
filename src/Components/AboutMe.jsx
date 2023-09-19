const AboutMe = () => {
return (
  <section id="AboutMe"
  className=" md:h-screen grid    overflow-hidden bg-light2 dark:bg-darkbg dark:text-light2  sm:grid sm:grid-cols-2 sm:items-center"
>


    <img
      id="Aimg"
      alt="setup"
      src="/images/descargar (1).jpeg"
      className="h-screen md:h-full md:w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px]  md:rounded-ss-[60px]"
    />

  <div id="Atext" className=" py-20 p-8 md:p-12 lg:px-16 lg:py-24">
    <div
      className=" mx-auto max-w-xl text-center ltr:sm:text-left "
    >
      <h2 className="-mt-50 pt-2 md:pt-8 font-bold text-5xl md:text-6xl font-arvo md:text-right  pb-6 md:pb-10">
      About Me
      </h2>

      <p className="-mt-50 md:mt-4 md:block font-rokkitt md:text-right text-xl  md:text-2xl ">
      I have always liked to understand how things are created, since I was a child. When I discovered programming, I found a way to combine my creativity with my taste for technology. I love the challenge of solving problems and creating solutions that are useful to others.     </p>
    </div>
  </div>

</section>

)
}

export default AboutMe
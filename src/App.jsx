import { useEffect, useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import ContactMe from './Components/ContactMe'
import ScrollReveal from "scrollreveal"
import Social from './Components/Social'
function App() {
  
      {/*animacion*/}
      const [reveal, setReveal] = useState(null)

  useEffect(() => {
    const reveal = ScrollReveal({
    distance: "20px",
    origin: "top",
    delay: 1000,
    duration: 2000,
    easing: "ease-in-out",
    });
    setReveal({reveal})
    
      /*NAVBAR*/
    reveal.reveal("#navheader", {
        opacity: 0,
        duration: 2000,
        easing: "ease-in-out",
    });

      /*HOME*/
    reveal.reveal("#Himg", {
        trigger: "scroll",
        opacity: 0,
        duration: 2000,
        easing: "ease-in-out",
        origin: "right"
    });
    reveal.reveal("#Htext", {
      trigger: "scroll",
      rotate:90,
      opacity: 0,
      duration: 2000,
      easing: "ease-in-out",
      origin: "left"
  });

  /*ABOUT ME*/
  reveal.reveal("#Aimg", {
    delay: 200,
    trigger: "scroll",
    rotate:90,
    opacity: 0,
    duration: 900,
    easing: "ease-in-out",
    origin: "left"
});
reveal.reveal("#Atext", {
  delay: 200,
  trigger: "scroll",
  rotate:90,
  opacity: 0,
  duration: 900,
  easing: "ease-in-out",
  origin: "right"
});

/*PROJECTS*/
reveal.reveal("#Pimg", {
  delay: 200,
  trigger: "scroll",
  rotate:90,
  opacity: 0,
  duration: 900,
  easing: "ease-in-out",
  origin: "bottom"
});
reveal.reveal("#Ptext", {
delay: 200,
trigger: "scroll",
rotate:90,
opacity: 0,
duration: 900,
easing: "ease-in-out",
origin: "left"
});

/*CONTACT ME*/
reveal.reveal("#Cemail", {
  delay: 200,
  trigger: "scroll",
  rotate:90,
  opacity: 0,
  duration: 900,
  easing: "ease-in-out",
  origin: "left"
});
reveal.reveal("#Ctext", {
delay: 200,
trigger: "scroll",
rotate:90,
opacity: 0,
duration: 900,
easing: "ease-in-out",
origin: "right"
});

/*FOOTER*/
reveal.reveal("#Ftext", {
  delay: 200,
  trigger: "scroll",
  rotate:90,
  opacity: 0,
  duration: 900,
  easing: "ease-in-out",
  origin: "bottom"
});
}, [])

  return (
    <main className='dark:bg-darkbg'>
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
      <Social/>
    </main>
  )
}

export default App
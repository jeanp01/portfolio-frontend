import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Social from "./Components/Social";
import Loader from "./Components/Loader/Loader";
import { useEffect, useState } from "react";

function App() {
  const [Loading, setLoading] = useState(true);

  const handlePageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    window.addEventListener("load", handlePageLoad);
    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);
  return (
    <main className="dark:bg-darkbg">
      {Loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loader />
        </div>
      ) : (
        <>
          <Navbar />
          <Home />
          <AboutMe />
          <Projects />
          <ContactMe />
          <Footer />
          <Social />{" "}
        </>
      )}
    </main>
  );
}

export default App;

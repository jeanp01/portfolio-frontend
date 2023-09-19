import { useEffect, useState } from "react"
import "./Navbar.css"
const Navbar = () => {
    {/*estado  dark mode*/}
    const[theme, setTheme] = useState("light")

    {/*estado del menu*/}
    const[menuOpen, setMenuOpen] = useState(false)

    

    

useEffect(() => {
    if(theme === "dark"){
    document.documentElement.classList.add("dark")
    }else{
    document.documentElement.classList.remove("dark")
    }
}, [theme])




const handleThemeSwitch = () =>{
    setTheme(theme === "light" ? "dark": "light")
}
{/*cambiar estado del menu*/}
const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
}


return (

    <header  id="navheader" className=" h-auto mx-auto  fixed  z-50  shadow-lg top-0  w-full bg-light2  dark:bg-darkbg dark:text-light2 ">
        
        <div className=" flex flex-wrap items-center  justify-between  p-2 ">


            <div className="w-8 h-10 ">
            <img src="/images/letter-l-5569128_640.png" alt="" className="imgL w-full h-full object-cover" />
            </div>

                
                

                {/*BOTONES*/}

            <div className="   md:hidden flex space-between center">
            
                {/*BOTON HAMBURGUESA*/}
                <div className="">
                <input type="checkbox" id="checkbox" onClick={handleMenuToggle}/>
    <label htmlFor="checkbox" className="toggle ">
        <div className="bars" id="bar1"></div>
        <div className="bars" id="bar2"></div>
        <div className="bars" id="bar3"></div>
    </label>
    </div>

            {/*BOTON DARK MODE*/}
            <div className="px-8 flex">
            <label className="container">
<input type="checkbox" checked="checked" onClick={handleThemeSwitch}/>
    <svg viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="moon"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg>
    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="sun"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path></svg>
    </label>
    </div>

            </div>





            {/*MENU*/}

            <nav className={` nav w-full md:block md:w-auto ${menuOpen?"block":"hidden"}`} id="navbar-default">
                <ul className=" menu-list font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg items-center  md:flex-row md:space-x-8 md:border-0 md:bg-light2 dark:bg-darkbg ">
                    <li className="list-item lg:px-10">
                        <a href="#Home"
                        className=" text-2xl font-rokkitt  link  block py-2 pl-3 pr-4 items-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500  dark:hover:text-white md:dark:hover:bg-transparent"
                        >Home</a>
                    </li>
                    <li className="list-item lg:px-10">
                    <a href="#AboutMe"
                        className="text-2xl font-rokkitt  link block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page"
                        >About Me</a>
                    </li>
                    <li className="list-item lg:px-10 ">
                    <a href="#Projects"
                        className="text-2xl font-rokkitt  link block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >Projects</a>
                    </li>
                    <li className="list-item lg:px-10">
                    <a href="#ContactMe"
                        className="text-2xl font-rokkitt link block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >Contact Me</a>
                    </li>
                    <li className="list-item lg:pl-10 pr-2 ">
                    <button id='dark-mode-btn' className='text-2xl font-rokkitt hidden link md:block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
                        md:hover:text-blue-700 md:p-0 dark:text-white
                        md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' type='button' onClick={handleThemeSwitch}>Dark Mode</button>
                    </li>
                </ul>
            </nav>
            
        </div>
        
    </header>
    

)
}

export default Navbar

import { useState } from "react";
import logo from "../../assets/logo.png"
import it from "../../assets/it.png"
import en from "../../assets/en.png"
import { RxHamburgerMenu } from "react-icons/rx";
import{ AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdSunny  } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useStoreSelector, useStoreDispatch } from "../store/hooks"
import globalSlice from "../../data/appSlice"

const Navbar: React.FC = () => {
  const darkMode:boolean = useStoreSelector((state) => state.globalReducer.darkMode)

  const dispatch = useStoreDispatch()
  const [menu, setMenu] = useState<boolean>(false);

  const onMenu = () => {
    const containerLink = document.querySelector(
      ".container-link"
    ) as HTMLDivElement;
    if (menu) {
      containerLink.classList.add("absolute");
      setMenu(false);
    } else {
      containerLink.classList.remove("absolute");
      setMenu(true);
    }
  };

  return (
    <div className="container-nav">
      <div className="container-logo">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-16 mt-4 mb-2 ml-[30%]"
          />
          <h1 className="text-white tracking-wider">Meditation Wave</h1>
        </Link>
        {menu ? (
          <AiOutlineClose
            className="burger"
            color="white"
            onClick={() => onMenu()}
          />
        ) : (
          <RxHamburgerMenu
            className="burger"
            color="white"
            onClick={() => onMenu()}
          />
        )}
        
      </div>
      <div className="container-link absolute top-[-100%] 2xl:relative 2xl:top-[100%]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="start">Start</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </div>
      <div className="flex justify-around 2xl:justify-between items-center 2xl:w-80 py-4">
        <div className="flex gap-4">
          <img
            onClick={() => dispatch(globalSlice.actions.changeLanguage("ENG"))}
            src={en}
            alt="english"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          />
          <img
            onClick={() => dispatch(globalSlice.actions.changeLanguage("ITA"))}
            src={it}
            alt="italian"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full cursor-pointer"
          />
        </div>
        <label
          className={`bg-amber-300 relative w-16 h-8 rounded-full`}
        >
          <input
            onClick={() => dispatch(globalSlice.actions.changeDarkMode(!darkMode))}
            type="checkbox"
            aria-label="set dark mode"
            className="sr-only peer "
          />
          <span className="flex justify-center items-center w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 cursor-pointer peer-checked:bg-white peer-checked:left-8 transition-all duration-500">
            {darkMode ? <MdDarkMode/> : <MdSunny />}
          </span>
        </label>
      </div>
    </div>
  );
}

export default Navbar

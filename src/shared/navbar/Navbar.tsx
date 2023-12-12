import { useState } from "react";
import imgNavbar from "../../assets/header.jpg"
import it from "../../assets/it.png"
import en from "../../assets/en.png"
import { GiHamburgerMenu } from "react-icons/gi";
import{ AiOutlineClose } from "react-icons/ai";
import { MdDarkMode, MdSunny  } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useStoreSelector, useStoreDispatch } from "../store/hooks"
import globalSlice from "../../data/appSlice"

const Navbar: React.FC = () => {
  const navigate = useNavigate()
  const darkMode:boolean = useStoreSelector((state) => state.globalReducer.darkMode)

  const dispatch = useStoreDispatch()
  const [menu, setMenu] = useState<boolean>(false);

  const onMenu = () => {
    const containerLink = document.getElementById("container-link") as HTMLDivElement;
    if (menu) {
		containerLink.classList.remove("top-[160px]");
		containerLink.classList.add("top-[-200px]")
		setMenu(false);
    } else {
		containerLink.classList.remove("top-[-200px]");
		containerLink.classList.add("top-[160px]");
		setMenu(true);
    }
  };

  return (
    <div className="h-40 2xl:h-96 w-full relative">
      <img src={imgNavbar} alt="Navbar img" className="object-cover w-full h-full rotate-180 2xl:rotate-0"/>
      <div className=" flex flex-col h-full w-full absolute top-0 text-slate-900">
        <div className="flex 2xl:w-[50%] w-full h-1/3 justify-end sm:justify-between items-center 2xl:items-start sm:pt-2 px-2 gap-4 2xl:gap-0">
          <div className="flex gap-4">
            <img
              onClick={() => dispatch(globalSlice.actions.changeLanguage("ENG"))}
              src={en}
              alt="english"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 2xl:w-10 2xl:h-10 rounded-full cursor-pointer"
            />
            <img
              onClick={() => dispatch(globalSlice.actions.changeLanguage("ITA"))}
              src={it}
              alt="italian"
              className="w-7 h-7 sm:w-8 sm:h-8 md:w-12 md:h-12 2xl:w-10 2xl:h-10 rounded-full cursor-pointer"
            />
          </div>
          <label
            className={`bg-amber-300 relative w-14 h-7 sm:w-16 sm:h-9 rounded-full mr-2 2xl:mr-0`}
          >
            <input
              onClick={() => dispatch(globalSlice.actions.changeDarkMode(!darkMode))}
              type="checkbox"
              aria-label="set dark mode"
              className="sr-only peer"
            />
            <span className="flex justify-center items-center w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-1 cursor-pointer peer-checked:bg-white peer-checked:left-8 transition-all duration-500">
              {darkMode ? <MdDarkMode/> : <MdSunny />}
            </span>
          </label>
        </div>
        <div className="flex flex-col 2xl:flex-col-reverse h-2/3 w-[100%] 2xl:w-[50%]">
			<div className="w-[100%] flex justify-between 2xl:justify-center relative top-14 2xl:static py-2">
				{menu ? (
					<AiOutlineClose
					className="2xl:hidden cursor-pointer ml-3 h-8 sm:h-10 text-4xl"
					color="rgb(30 41 59)"
					onClick={() => onMenu()}
					/>
				) : (
					<GiHamburgerMenu
					className="2xl:hidden cursor-pointer ml-3 h-8 sm:h-10 text-4xl"
					color="rgb(30 41 59)"
					onClick={() => onMenu()}
					/>
				)}
				<button onClick={() => navigate("start")} className="w-24 sm:w-28 h-8 sm:h-10 text-sm sm:text-lg bg-amber-900 hover:bg-amber-800 rounded-2xl text-white font-medium tracking-widest transition duration-300 ease-in-out shadow-xl mr-3 2xl:mr-7 2xl:mb-4">START</button>
			</div>
			<div id="container-link" className="flex flex-col 2xl:flex-row items-center 2xl:justify-around py-4 gap-4 w-[100%] h-[100%] absolute 2xl:static top-[-200px] bg-amber-700 bg-opacity-90 2xl:bg-transparent">
				<NavLink onClick={() => onMenu()} to="/" className="font-bold text-2xl 2xl:text-3xl tracking-widest text-slate-100">Home</NavLink>
				<NavLink onClick={() => onMenu()} to="about" className="font-bold text-2xl 2xl:text-3xl tracking-widest text-slate-100">About</NavLink>
				<NavLink onClick={() => onMenu()} to="contact" className="font-bold text-2xl 2xl:text-3xl tracking-widest text-slate-100">Contact</NavLink>
			</div>
		</div>
      </div>
    </div>
  );
}

export default Navbar

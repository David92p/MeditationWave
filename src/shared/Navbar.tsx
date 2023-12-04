import { useState } from "react";
import logo from "../assets/numero-1.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import{ AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {

  const [menu, setMenu] = useState<boolean>(false);

  const onMenu = () => {
    setMenu(!menu)
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
  }
  return (
    <>
      <nav className="flex items-center w-[100%] bg-slate-900 border-2 border-green-300">
        <a className="flex flex-col items-center gap-2 border-2 border-white px-4 py-2">
          <img
            src={logo}
            alt="logo"
            className="w-24 2xl:w-32 h-18 rounded-xl border-2 border-red-500"
          />
        </a>
        <div className="container-link flex flex-col 2xl:flex-row w-[100%] items-center gap-10 2xl:justify-around my-6 absolute top-[-100%] sm:relative sm:top-[100%] ">
          {/* /div> gap-10 2xl:gap-40 my-6 2xl:font-medium absolute top-[-100%] 2xl:relative 2xl:top-[100%]"> */}
          <a className="text-xl sm:text-2xl text-white relative">Home</a>
          <a className="text-xl sm:text-2xl text-white relative">Start Meditation</a>
          <a className="text-xl sm:text-2xl text-white relative">Contact</a>
        </div>
        {menu ? (
          <AiOutlineClose
            className="2xl:hidden text-4xl absolute left-[85%] top-10"
            color="white"
            onClick={() => onMenu()}
          />
        ) : (
          <RxHamburgerMenu
            className="2xl:hidden text-4xl absolute left-[85%] top-10"
            color="white"
            onClick={() => onMenu()}
          />
        )}
      </nav>
    </>
  )
}

export default Navbar

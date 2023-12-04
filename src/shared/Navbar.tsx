import { useState } from "react";
import logo from "../assets/numero-1.jpg"
import { RxHamburgerMenu } from "react-icons/rx";
import{ AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {

  const [menu, setMenu] = useState<boolean>(false);

  return (
    <>
      <nav className="flex  justify-around items-center w-[100%] bg-slate-900 relative">
        <a className="flex flex-col items-center gap-2 px-4 py-2">
          <img
            src={logo}
            alt="logo"
            className="w-24 2xl:w-32 h-18 rounded-xl"
          />
        </a>
        <div className={`flex flex-col md:flex-row items-center md:justify-around gap-10 bg-slate-900 w-full py-8 absolute md:relative ${menu ? "top-[90%]" : "bottom-[100%]"}`}>
          <a className="text-xl font-bold tracking-wider md:text-2xl text-white cursor-pointer ">Home</a>
          <a className="text-xl font-bold tracking-wider md:text-2xl text-white cursor-pointer">Start</a>
          <a className="text-xl font-bold tracking-wider md:text-2xl text-white cursor-pointer">Contact</a>
        </div>
        {menu ? (
          <AiOutlineClose
            className="md:hidden text-5xl"
            color="white"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <RxHamburgerMenu
            className="md:hidden text-5xl"
            color="white"
            onClick={() => setMenu(!menu)}
          />
        )}
      </nav>
    </>
  )
}

export default Navbar

import { useState } from "react";
import logo from "../../assets/logo.png"
import { RxHamburgerMenu } from "react-icons/rx";
import{ AiOutlineClose } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Navbar: React.FC = () => {

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
    </div>
  );
}

export default Navbar

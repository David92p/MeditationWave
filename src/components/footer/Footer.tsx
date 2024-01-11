import React from 'react';
import linkedin from "../../assets/images/linkedin.png"
import github from "../../assets/images/git-hub.png"
import instagram from "../../assets/images/instagram.png"
import { useStoreSelector } from '../../store/hooks';

const Footer: React.FC = () => {

    const state = useStoreSelector((state) => state.globalReducer);

    return (
      <div className={`flex flex-col h-28 ${state.darkMode ? "bg-amber-800 text-white" : "bg-amber-700 text-slate-900"}`}>
        <div className="flex justify-center gap-8 my-auto">
          <a
            href="https://it.linkedin.com/in/davide-panetta-065420207"
            target="_blank"
          >
            <img src={linkedin} alt="linkedin" className="w-8 h-8" />
          </a>
          <a href="https://github.com/David92p" target="_blank">
            <img src={github} alt="github" className="w-8 h-8" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram" className="w-8 h-8" />
          </a>
        </div>
        <div className="flex justify-center items-center mx-2 sm:mx-0">
          © 2024 | David Panetta
        </div>
      </div>
    );
  };
  

export default Footer

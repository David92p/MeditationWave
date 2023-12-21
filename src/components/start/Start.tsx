import { useState } from "react";
import { useStoreSelector } from "../../store/hooks"
import icon from "../../assets/images/about3.jpg"
import { audioSource } from "../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa0, fa1, fa2, fa3, fa4, fa5, fa6, faClock, faInfinity, faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";



const Start:React.FC = () => {
  const state = useStoreSelector((state) => state.globalReducer)
  //const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [audio, setAudio] = useState("")

 
  return (
    <div className= {
      `${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}
      w-full flex flex-col
    `}>
      <div className="flex flex-col items-center gap-4 sm:gap-8 pt-6">
        <audio src={audio} autoPlay loop/>
        <img src={icon} alt="icon" className={`w-44 md:w-72 2xl:w-64 rounded-full ${state.darkMode ? "shadow-lg shadow-amber-800" : "shadow-2xl shadow-amber-600"}`}/>
        <div className="flex flex-col justify-center items-center gap-8">
          <div className="flex gap-6">
            <button onClick={() => setIsPlaying(!isPlaying)} className="text-white text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-16 sm:w-28 2xl:w-22 h-16 sm:h-28 2xl:h-22 rounded-full">
              {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
            <button onClick={() => setAudio("")} className="text-white text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-16 sm:w-28 2xl:w-22 h-16 sm:h-28 2xl:h-22 rounded-full">
              <FontAwesomeIcon icon={faStop} />
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-6">
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa5} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa1} /> <FontAwesomeIcon icon={fa0} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa2} /> <FontAwesomeIcon icon={fa0} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa3} /> <FontAwesomeIcon icon={fa0} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
            </div>
            <div className="flex justify-center gap-6">
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa4} /> <FontAwesomeIcon icon={fa5} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={fa6} /> <FontAwesomeIcon icon={fa0} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
              <button className="flex justify-center items-center text-white text-xl sm:text-3xl px-6 bg-amber-800 w-16 sm:w-20 md:w-24 h-8 sm:h-12 md:h-14 rounded-xl">
                <FontAwesomeIcon icon={faInfinity} />
                <FontAwesomeIcon icon={faClock} style={{marginLeft: "5px"}}/>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center 2xl:flex 2xl:justify-around 2xl:items-center 2xl:h-80 gap-8  py-8">
        {
          audioSource.map((audio) => {
            return (
              <button onClick={() => setAudio(audio.source)} key={audio.id} className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
                <FontAwesomeIcon icon={audio.icon} />
              </button>
            )
          })
        }
      </div>
    </div>
  )
};

export default Start

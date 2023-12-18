import { useState } from "react";
import { useStoreSelector } from "../../store/hooks"
import icon from "../../assets/images/about3.jpg"

import rain  from "../../assets/sounds/rain.mp3"
import fire from "../../assets/sounds/fire.mp3"
import beach from "../../assets/sounds/beach.mp3"
import bird from "../../assets/sounds/bird.mp3"
import violin from "../../assets/sounds/violin.mp3"
import wind from "../../assets/sounds/wind.mp3"
import chords from "../../assets/sounds/chords.mp3"
import space from "../../assets/sounds/space.mp3"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faDove, faFire, faGuitar, faMusic, faPause, faPlay, faWater, faWind } from "@fortawesome/free-solid-svg-icons";
import { faSkyatlas } from "@fortawesome/free-brands-svg-icons";


const Start:React.FC = () => {
  const state = useStoreSelector((state) => state.globalReducer)
  // const audioPlayer = useRef<HTMLAudioElement>(null);


  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  // const [audio, setAudio] = useState({rain, fire, beach, bird,violin, wind, chords, space})

  // const togglePlayPause = () => {
  //  audioPlayer.current.play()
   
  // }

  // const playSound = (name:string) => {
    
  // } 
  
  return (
    <div className={
      `${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}
      w-full sm:h-screen flex flex-col 2xl:flex-row
    `}>
      <div className="flex justify-center items-center 2xl:items-start sm:h-1/3 2xl:h-full 2xl:w-1/3 py-6 2xl:pt-44">
        <img src={icon} alt="icon" className={`w-44 md:w-72 2xl:w-96 rounded-full ${state.darkMode ? "shadow-lg shadow-amber-800" : "shadow-2xl shadow-amber-600"}`}/>
      </div>
      <div className="flex 2xl:flex-col items-center justify-between mx-4 sm:mx-8 sm:h-2/3 2xl:h-full 2xl:w-2/3 pb-24 sm:pb-0">
        <div className="flex flex-col 2xl:flex-row sm:items-center sm:justify-around gap-8 w-1/3 2xl:w-full sm:h-full 2xl:h-1/3">
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <FontAwesomeIcon icon={faCloudRain} />
            <audio src={rain} />
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <FontAwesomeIcon icon={faFire} />
            <audio src={fire} />
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <FontAwesomeIcon icon={faWater} />
            <audio src={beach}/>
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <FontAwesomeIcon icon={faDove} />
            <audio src={bird}/>
          </button>
        </div>
        <div className="flex 2xl:flex-col-reverse items-center w-2/3 2xl:w-full h-full 2xl:h-2/3">
          <div className="flex items-center justify-center 2xl:items-start 2xl:pt-10 w-1/2 2xl:h-2/3">
            <button onClick={() => setIsPlaying(isPlaying)} className="flex justify-center items-center text-white text-4xl bg-amber-800 w-24 sm:w-32 2xl:w-44 h-24 sm:h-32 2xl:h-24 rounded-full">
                {isPlaying ? <FontAwesomeIcon icon={faPause} />: <FontAwesomeIcon icon={faPlay} />}
            </button>
          </div>
          <div className="flex flex-col 2xl:flex-row sm:items-center 2xl:items-start w-1/2 2xl:w-full sm:h-full 2xl:h-1/3 sm:justify-around items-end gap-8">
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <FontAwesomeIcon icon={faGuitar} />
              <audio src={violin}/>
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <FontAwesomeIcon icon={faWind} />
              <audio src={wind}/>
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <FontAwesomeIcon icon={faMusic} />
              <audio src={chords}/>
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <FontAwesomeIcon icon={faSkyatlas} />
              <audio src={space}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Start

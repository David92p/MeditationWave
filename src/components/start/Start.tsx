import { useStoreSelector } from "../../shared/store/hooks"
import icon from "../../assets/images/about3.jpg"
import { CiPlay1 } from "react-icons/ci";
import { IoRainyOutline } from "react-icons/io5";
import { GiMusicalScore } from "react-icons/gi";

import rain  from "../../assets/sounds/rain.mp3"

const Start:React.FC = () => {
  const state = useStoreSelector((state) => state.globalReducer)

  return (
    <div className={
      `${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"}
      w-full sm:h-screen flex flex-col 2xl:flex-row border-8 border-blue-900
    `}>
      <div className="flex justify-center items-center 2xl:items-start sm:h-1/3 2xl:h-full 2xl:w-1/3 py-6 2xl:pt-44 border-4 border-pink-600">
        <img src={icon} alt="icon" className={`w-44 md:w-72 2xl:w-96 rounded-full ${state.darkMode ? "shadow-lg shadow-amber-800" : "shadow-2xl shadow-amber-600"}`}/>
      </div>
      <div className="flex 2xl:flex-col items-center justify-between mx-2 sm:mx-8 sm:h-2/3 2xl:h-full 2xl:w-2/3 border-4 border-violet-500">
        <div className="flex flex-col 2xl:flex-row sm:items-center sm:justify-around gap-8 w-1/3 2xl:w-full sm:h-full 2xl:h-1/3 border-4 border-orange-500">
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <IoRainyOutline />
            <audio src={rain} autoPlay/>
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <GiMusicalScore />
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <IoRainyOutline />
          </button>
          <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
            <IoRainyOutline />
          </button>
        </div>
        <div className="flex 2xl:flex-col-reverse items-center w-2/3 2xl:w-full h-full 2xl:h-2/3 border-4 border-green-500">
          <div className="flex items-center justify-center 2xl:items-start 2xl:pt-10 w-1/2 2xl:h-2/3 border-4 border-blue-600">
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-24 sm:w-32 2xl:w-44 h-24 sm:h-32 2xl:h-24 rounded-full">
                <CiPlay1 />
            </button>
          </div>
          <div className="flex flex-col 2xl:flex-row sm:items-center 2xl:items-start w-1/2 2xl:w-full sm:h-full 2xl:h-1/3 sm:justify-around items-end gap-8 border-4 border-black">
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <IoRainyOutline />
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <IoRainyOutline />
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <IoRainyOutline />
            </button>
            <button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 rounded-full">
              <IoRainyOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Start

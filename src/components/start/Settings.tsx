import { faCheck, faCircleArrowLeft} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReactSlider from "react-slider"
import { useStoreSelector } from '../../store/hooks'

type SettingsProps = {
  timerSetting: (value: number, timing: "hours" | "minutes" | "seconds") => void
  buttonsSetting: (typeButton: "accept" | "back_reset") => void
  timer: {hours: number, minutes: number, seconds: number}
}

const Settings:React.FC<SettingsProps> = ({ timerSetting, buttonsSetting, timer }) => {
  const state = useStoreSelector((state) => state.globalReducer)
  
  return (
    <div className="w-full sm:w-[75%] 2xl:w-1/2 flex flex-col items-center text-2xl tracking-wider pt-6 px-6 sm:px-0 font-extrabold">
      <label className="text-3xl">{state.language == "ENG" ? "Hours" : "Ore"} : {timer.hours}</label>
      <ReactSlider
        className={"w-full h-9 bg-amber-800 rounded-2xl flex items-center mt-4 mb-10"}
        thumbClassName={"w-8 h-8 sm:w-10 bg-amber-500 rounded-2xl cursor-pointer"}
        trackClassName={"track"}
        value={timer.hours}
        onChange={(value) => timerSetting(value  , "hours")}
        min={0}
        max={12}
      >
      </ReactSlider>
      <label className="text-3xl">{state.language == "ENG" ? "Minutes" : "Minuti"}: {timer.minutes}</label>
      <ReactSlider
        className={"w-full h-9 bg-amber-800 rounded-2xl flex items-center mt-4 mb-10"}
        thumbClassName={"w-8 h-8 sm:w-10 bg-amber-500 rounded-2xl cursor-pointer"}
        trackClassName={"track"}
        value={timer.minutes}
        onChange={(value) => timerSetting(value, "minutes")}
        min={0}
        max={59}
      >
      </ReactSlider>
      <label className="text-3xl">{state.language == "ENG" ? "Seconds" : "Secondi"}: {timer.seconds}</label>
      <ReactSlider
        className={"w-full h-9 bg-amber-800 rounded-2xl flex items-center mt-4 mb-10"}
        thumbClassName={"w-8 h-8 sm:w-10 bg-amber-500 rounded-2xl cursor-pointer"}
        trackClassName={"track"}
        value={timer.seconds}
        onChange={(value) => timerSetting(value, "seconds")}
        min={1}
        max={59}
      >
      </ReactSlider>
      <div className="flex justify-around w-full ">
        <button onClick={() => buttonsSetting("back_reset")} className="text-white text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-16 sm:w-28 2xl:w-22 h-16 sm:h-28 2xl:h-22 rounded-full">
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
        <button onClick={() => buttonsSetting("accept")} className="text-white text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-16 sm:w-28 2xl:w-22 h-16 sm:h-28 2xl:h-22 rounded-full">
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  )
}

export default Settings

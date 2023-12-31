
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import icon from "../../assets/images/about3.jpg"
import { useEffect, useState } from "react";
import { useStoreSelector } from "../../store/hooks";
import { useCountdown } from '..';


type TimerProps = {
  timer: {hours: number, minutes: number, seconds: number}
}

const Timer:React.FC<TimerProps> = ({ timer }) => {
  const state = useStoreSelector((state) => state.globalReducer)

  const [showsDisplay, setshowsDisplay] = useState<boolean>(false)

  const { hours, minutes, seconds } = useCountdown(timer)

  useEffect(() => {
    timer.hours || timer.minutes || timer.seconds != 0 
    ? setshowsDisplay(true)
    : setshowsDisplay(false)
  }, [timer])
  

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 w-full mt-4 relative">
      <div className="flex flex-col justify-center items-center sm:w-96 2xl:w-1/4"> 
        <CircularProgressbar value={100000000} text={`${showsDisplay ? (hours > 9 ? hours : "0" + hours) + " : " + (minutes > 9 ? minutes : "0" + minutes) + " : " + (seconds > 9 ? seconds : "0" + seconds) : ""}`} styles={buildStyles({
          textColor: `${state.darkMode ? "white" : "rgb(146 64 14)"}`, 
          pathColor: `${state.darkMode ? "rgb(217 119 6)" : "rgb(146 64 14)"}`, 
          trailColor: `${state.darkMode ? "rgb(252 211 77)" : "rgb(245 158 11)"}`,
          textSize: '16px',
          
        })}/>
        <img src={icon} alt="icon" className={`w-60 md:w-80 2xl:w-96 rounded-full absolute ${showsDisplay ? "opacity-30" : "opacity-100"}`}/>
      </div>
    </div>
  )
}

export default Timer



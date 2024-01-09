
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import icon from "../../assets/images/about3.jpg"
import { useEffect, useState } from "react";
import { useStoreSelector } from "../../store/hooks";
import { Controls } from '..';
import { audioSource } from '../../data';


type TimerProps = {
  start: boolean
  timer: {hours: number, minutes: number, seconds: number, circle: number, decrementCircle: number}
  setControls: React.Dispatch<React.SetStateAction<Controls>>
}

const Timer:React.FC<TimerProps> = ({ start, timer, setControls }) => {
  const state = useStoreSelector((state) => state.globalReducer)

  const [showsDisplay, setshowsDisplay] = useState<boolean>(false)

  useEffect(() => {
    timer.hours || timer.minutes || timer.seconds != 0 
    ? setshowsDisplay(true)
    : setshowsDisplay(false)
  }, [timer])

  useEffect(() => {
    if (start) {
			const customInteval = setInterval(() => {
				setControls((prevControls:Controls)=> {
					const { hours, minutes, seconds } = prevControls.timer
						if (seconds > 0){
							return {...prevControls, timer: {...prevControls.timer, hours, minutes, seconds: seconds - 1, circle: prevControls.timer.circle - prevControls.timer.decrementCircle}}
						}
						else if (minutes > 0){
							return {...prevControls, timer: {...prevControls.timer, hours, minutes: minutes- 1, seconds: 59, circle: prevControls.timer.circle - prevControls.timer.decrementCircle} }
						}
						else if ( hours > 0) {
							return {...prevControls, timer: {...prevControls.timer, hours: hours - 1,  minutes:59, seconds: 59, circle: prevControls.timer.circle - prevControls.timer.decrementCircle}}
						}
						else {
              setshowsDisplay(false)
							return { ...prevControls, timer: {hours: 0, minutes: 0, seconds: 0, circle: 100, decrementCircle: 0}, start: {timer: false, tracks: {onPlay: "", sourceAudio: audioSource}}, playPause: false}
						}
				})
			}, 1000)
	
			return () => clearInterval(customInteval)
		}
  }, [setControls, start])

  return (
    <div className="flex flex-col items-center gap-4 sm:gap-8 w-full mt-4 relative">
      <div className="flex flex-col justify-center items-center sm:w-96 2xl:w-1/3"> 
        <CircularProgressbar value={timer.circle} text={`${showsDisplay ? (timer.hours > 9 ? timer.hours : "0" + timer.hours) + " : " + (timer.minutes > 9 ? timer.minutes : "0" + timer.minutes) + " : " + (timer.seconds > 9 ? timer.seconds : "0" + timer.seconds) : ""}`} styles={buildStyles({
          textColor: `${state.darkMode ? "white" : "rgb(146 64 14)"}`, 
          pathColor: `${state.darkMode ? "rgb(217 119 6)" : "rgb(146 64 14)"}`, 
          trailColor: `${state.darkMode ? "rgb(252 211 77)" : "rgb(245 158 11)"}`,
          textSize: "14px ",
        })}/>
        <img src={icon} alt="icon" className={`w-60 md:w-80 2xl:w-1/4 rounded-full absolute ${showsDisplay ? "opacity-30" : "opacity-100"}`}/>
      </div>
    </div>
  )
}

export default Timer




import { useRef, useState } from 'react'
import { BtnSetting, PlayPauseStop, Settings, Timer } from '..'
import { useStoreSelector } from '../../store/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { audioSource } from "../../data";


export type Controls = {
	start: {timer: boolean, audio: string}
	playPause: boolean
	settings: boolean
	// start: boolean
	timer: {hours: number, minutes: number, seconds: number} 
	// audio: string
	alert: string
  }

const Controller:React.FC = () => {
	const state = useStoreSelector((state) => state.globalReducer)
	const alertTimer = useRef<HTMLHeadingElement>(null!)
	const audioRef = useRef<HTMLAudioElement>(null!)


	const [controls, setControls] = useState<Controls>({ start: {timer: false, audio: ""}, playPause: false, settings: false, timer: {hours: 0, minutes: 0, seconds: 0}, alert: "Frase di default"})
	const [showAlert, setShowAlert] = useState<boolean>(false)


	// funzione attiva disattiva componente setting
	const toggleSetting = ():void => {
		setShowAlert(false)
		setControls((prevControls: Controls) => {
			return {...prevControls, settings: !prevControls.settings}
		})
	}
	// Funzione componente setting imposta timer
	const timerSetting = (value: number, timing: "hours" | "minutes" | "seconds"):void => {
		setControls((prevControls: Controls) => {
			const { timer } = prevControls
			return {...prevControls, timer: {...timer, [timing]: value}}
		})
	}

	// Funzione bottoni componente setting
	const buttonsSetting = (typeButton: "accept" | "back_reset"):void => {
		setControls((prevControls:Controls) => {
			const { start } = prevControls
			if (prevControls.timer.hours == 0 && prevControls.timer.minutes == 0 && prevControls.timer.seconds == 0){
				return {...prevControls, settings: !prevControls.settings, start: {...start, timer: false}}
			}
			else if (typeButton == "accept"){
				return { ...prevControls, settings: !prevControls.settings, start: {audio: "",  timer: true} }
			}
			else if (typeButton == "back_reset"){
				return { ...prevControls, settings: !prevControls.settings, start: {...start, timer: false}, timer: {hours: 0, minutes: 0, seconds: 0} }
			}
			else {
				return prevControls
			}
		})
	}

	// funzione componente play pausa stop
	const playPauseStopController = (typeButton: "play" | "pause" | "stop") => {
		switch (typeButton) {
			case "stop":
				setControls((prevControls:Controls) => {
					return { ...prevControls, timer: {hours: 0, minutes: 0, seconds: 0}, start: {timer: false, audio: ""}, playPause: false} 
				})
				setShowAlert(false)
				break
			case "play": 
				if (!controls.start.timer){
					state.language == "ENG" 
					? setControls((prevControls:Controls) => ({...prevControls, alert: "Set a timer first"}))
					: setControls((prevControls:Controls) => ({...prevControls, alert: "Imposta prima un timer"}))
					setShowAlert(true)
				}
				else if (!controls.start.audio){
					console.log("entrato nel audio")
					state.language == "ENG" 
					? setControls((prevControls:Controls) => ({...prevControls, alert: "Set a sound to play"}))
					: setControls((prevControls:Controls) => ({...prevControls, alert: "Imposta un brano da riprodurre"}))
					setShowAlert(true)
				}
				else {
					setControls((prevControls:Controls) => ({...prevControls, playPause: true}))
					setShowAlert(false)
				}
			}
		setTimeout(()=>{
			setShowAlert(false)
		}, 4000)	
	}

	// funzione bottoni audio 
	const audioSelector = (audio: string) => {
		setControls((prevControls:Controls) => {
			return { ...prevControls, start: {...prevControls.start, audio} }
		})
	}

	return (
		<div className= {`${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"} w-full flex flex-col`}>
			<div className="flex flex-col items-center gap-4 sm:gap-8">
				<audio src={controls.start.audio} ref={audioRef} />
				{ controls.settings ? <Settings timer={controls.timer} timerSetting={timerSetting} buttonsSetting={buttonsSetting}/> : <Timer timer={controls.timer}/> }
				{ showAlert && <h1 ref={alertTimer} className={`text-2xl 2xl:text-4xl text-center font-extrabold tracking-wider px-5 py-1 rounded-lg ${state.darkMode ? "bg-amber-200 text-red-500" : "bg-stone-100 text-red-500 border-4 border-red-500"} transition-all`}>{ controls.alert }</h1> }
				<div className='flex justify-center gap-8'>
					{ controls.settings || <PlayPauseStop playPauseStopController = {playPauseStopController} playPause={controls.playPause} /> }
					{ controls.settings || <BtnSetting toggleSetting = {toggleSetting}/> }
				</div>
			</div>
			<div className="grid grid-cols-2 justify-items-center 2xl:flex 2xl:justify-around 2xl:items-center 2xl:h-80 gap-8  py-8">
				{
				audioSource.map((audio) => {
					return (
					<button onClick={() => audioSelector(audio.source)} key={audio.id} className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 2xl:hover:w-32 2xl:hover:h-32 transition-all rounded-full">
						<FontAwesomeIcon icon={audio.icon} />
					</button>
					)
				})
				}
			</div>
		</div>
	)
}

export default Controller

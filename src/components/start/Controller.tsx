
import { useRef, useState } from 'react'
import { BtnSetting, PlayPauseStop, Settings, Timer } from '..'
import { useStoreSelector } from '../../store/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Audio } from '../../data'
import { audioSource } from "../../data";
import { faVolumeLow, faVolumeOff } from '@fortawesome/free-solid-svg-icons';


export type Controls = {
	start: {
		timer: boolean, 
		tracks: {
			onPlay: string
			sourceAudio: Audio[]
		}
	}
	playPause: boolean
	settings: boolean
	timer: {hours: number, minutes: number, seconds: number} 
	alert: string
  }

const Controller:React.FC = () => {
	const state = useStoreSelector((state) => state.globalReducer)
	const alertTimer = useRef<HTMLHeadingElement>(null!)
	const audioRef = useRef<HTMLAudioElement>(null!)

	//const [audioTracks, setAudioTracks] = useState<Audio[]>(audioSource)
	const [controls, setControls] = useState<Controls>({ start: {timer: false, tracks: {onPlay: "", sourceAudio: audioSource}}, playPause: false, settings: false, timer: {hours: 0, minutes: 0, seconds: 0}, alert: "Frase di default"})
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
		setControls((prevControls:Controls):Controls => {
			const { start } = prevControls
			if (prevControls.timer.hours == 0 && prevControls.timer.minutes == 0 && prevControls.timer.seconds == 0){
				return {...prevControls, settings: !prevControls.settings, start: {...start, timer: false}}
			}
			else if (typeButton == "accept"){
				return { ...prevControls, settings: !prevControls.settings, start: {...prevControls.start, timer: true} }
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
					return { ...prevControls, timer: {hours: 0, minutes: 0, seconds: 0}, start: {timer: false, tracks: {onPlay: "", sourceAudio: audioSource}}, playPause: false} 
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
				else if (!controls.start.tracks.onPlay){
					console.log("entrato nel audio")
					state.language == "ENG" 
					? setControls((prevControls:Controls) => ({...prevControls, alert: "Set a sound to play"}))
					: setControls((prevControls:Controls) => ({...prevControls, alert: "Imposta un brano da riprodurre"}))
					setShowAlert(true)
				}
				else {
					setControls((prevControls:Controls) => ({...prevControls, playPause: true}))
					setShowAlert(false)
					audioRef.current.play()
					audioRef.current.loop
				}
				break
			case "pause": 
				audioRef.current.pause()
				setControls((prevControls:Controls) => ({...prevControls, playPause: false}))
				break
		}
		setTimeout(()=>{
			setShowAlert(false)
		}, 4000)	
	}

	// funzione bottoni audio 
	const audioSelector = (onPlay: string, id:number) => {
		setShowAlert(false)
		setControls((prevControls:Controls):Controls => {
			return (
				{
					...prevControls,
					playPause: false,
					start: {
						...prevControls.start,
						tracks: {onPlay, sourceAudio: prevControls.start.tracks.sourceAudio.map((audio:Audio) => audio.id == id ? {...audio, active: true} : {...audio, active: false}) }
					}
				}
			)
		})
	}

	//console.log(audioTracks)
	return (
		<div className= {`${state.darkMode ? "bg-stone-800 text-white" : "bg-amber-200 text-slate-900"} w-full flex flex-col`}>
			<div className="flex flex-col items-center gap-4 sm:gap-8">
				<audio src={controls.start.tracks.onPlay} ref={audioRef} />
				{ controls.settings ? <Settings timer={controls.timer} timerSetting={timerSetting} buttonsSetting={buttonsSetting}/> : <Timer timer={controls.timer} /> }
				{ showAlert && <h1 ref={alertTimer} className={`text-2xl 2xl:text-4xl text-center font-extrabold tracking-wider px-5 py-1 rounded-lg ${state.darkMode ? "bg-amber-200 text-red-500" : "bg-stone-100 text-red-500 border-4 border-red-500"} transition-all`}>{ controls.alert }</h1> }
				<div className='flex justify-center gap-8'>
					{ controls.settings || <PlayPauseStop playPauseStopController = {playPauseStopController} playPause={controls.playPause} /> }
					{ controls.settings || <BtnSetting toggleSetting = {toggleSetting}/> }
				</div>
			</div>
			<div className="w-full grid grid-cols-2 justify-items-center 2xl:flex 2xl:justify-around 2xl:items-center 2xl:h-80 gap-8 py-8">
				{
					controls.start.tracks.sourceAudio.map((audio) => {
						return (
							<div onClick={() => audioSelector(audio.source, audio.id)} key={audio.id} className={`flex ${audio.id % 2 == 1 ? (audio.id == 1 ? "flex-row-reverse" : "flex-row-reverse 2xl:flex-row") : "flex-row"} justify-center items-center gap-2 w-full 2xl:w-auto`}>
								{ audio.active && (controls.playPause ? <FontAwesomeIcon icon={faVolumeLow} className={`text-xl sm:text-4xl ${audio.id % 2 == 1 ? (audio.id == 1 ? "rotate-180" :  "rotate-180 2xl:rotate-0") : ""}`} /> : <FontAwesomeIcon icon={faVolumeOff} className={`text-xl sm:text-4xl ${audio.id % 2 == 1 ? (audio.id == 1 ? "rotate-180" :  "rotate-180 2xl:rotate-0") : ""}`}/> )}
								<button className="flex justify-center items-center text-white text-4xl bg-amber-800 w-16 sm:w-24 md:w-28 h-16 sm:h-24 md:h-28 2xl:hover:w-32 2xl:hover:h-32 transition-all rounded-full">
									<FontAwesomeIcon icon={audio.icon} />
								</button>
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Controller

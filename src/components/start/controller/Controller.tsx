
import { useRef, useState } from 'react'
import { BtnSetting, PlayPauseStop, Settings, Timer } from '../..'
import { useStoreSelector } from '../../../store/hooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { Audio } from '../../../data'
import { audioSource } from "../../../data";
import { faVolumeHigh, faVolumeOff } from '@fortawesome/free-solid-svg-icons';

// FUNZIONI DI GESTIONE
import { toggleSetting, timerSetting, buttonsSetting, playPauseStopController, audioSelector } from "./functions/ControllerFunctions"


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
	timer: {hours: number, minutes: number, seconds: number, circle: number,  decrementCircle: number} 
	alert: string
  }

const Controller:React.FC = () => {
	const state = useStoreSelector((state) => state.globalReducer)
	const alertTimer = useRef<HTMLHeadingElement>(null!)
	const audioRef = useRef<HTMLAudioElement>(null!)

	const [controls, setControls] = useState<Controls>({ start: {timer: false, tracks: {onPlay: "", sourceAudio: audioSource}}, playPause: false, settings: false, timer: {hours: 0, minutes: 0, seconds: 0, circle: 100, decrementCircle: 0} , alert: "Frase di default"})
	const [showAlert, setShowAlert] = useState<boolean>(false)

	return (
		<div className= {`w-full flex flex-col ${state.darkMode ? "bg-gradient-to-t from-stone-950 to-amber-900 text-white" : "bg-gradient-to-t from-amber-500 to-amber-200 text-slate-900"}`}>
			<div className="flex flex-col items-center gap-4 sm:gap-8">
				<audio src={controls.start.tracks.onPlay} ref={audioRef} loop/>
				{ controls.settings ? <Settings controlsSettings={setControls} timer={controls.timer} timerSetting={timerSetting} buttonsSetting={buttonsSetting}/> : <Timer start={controls.playPause} timer={controls.timer} setControls={setControls} /> }
				{ showAlert && <h1 ref={alertTimer} className={`text-2xl 2xl:text-4xl text-center font-extrabold tracking-wider px-5 py-1 rounded-lg ${state.darkMode ? "bg-amber-200 text-red-500" : "bg-stone-100 text-red-500 border-4 border-red-500"} transition-all`}>{ controls.alert }</h1> }
				<div className='flex justify-center gap-8'>
					{ controls.settings || <PlayPauseStop toggleAlert={setShowAlert} controls={controls} controlsSettings={setControls} audioRef={audioRef} playPauseStopController = {playPauseStopController} playPause={controls.playPause}  /> }
					{ controls.settings || <BtnSetting toggleSetting = {() => toggleSetting(setShowAlert, setControls)}/> }
				</div>
			</div>
			<div className="w-full grid grid-cols-2 justify-items-center 2xl:flex 2xl:justify-around 2xl:items-center 2xl:h-80 gap-8 py-8">
				{
					controls.start.tracks.sourceAudio.map((audio) => {
						return (
							<div onClick={() => audioSelector(audio.source, audio.id, setShowAlert, setControls)} key={audio.id} className={`flex ${audio.id % 2 == 1 ? (audio.id == 1 ? "flex-row-reverse" : "flex-row-reverse 2xl:flex-row") : "flex-row"} justify-center items-center gap-2 w-full 2xl:w-auto`}>
								{ audio.active && (controls.playPause ? <FontAwesomeIcon icon={faVolumeHigh} className={`${state.darkMode ? "text-white" : "text-stone-700"} text-xl sm:text-4xl ${audio.id % 2 == 1 ? (audio.id == 1 ? "rotate-180" :  "rotate-180 2xl:rotate-0") : ""}`} /> : <FontAwesomeIcon icon={faVolumeOff} className={`text-xl sm:text-4xl ${state.darkMode ? "text-white" : "text-stone-700"} ${audio.id % 2 == 1 ? (audio.id == 1 ? "rotate-180" :  "rotate-180 2xl:rotate-0") : ""}`}/> )}
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

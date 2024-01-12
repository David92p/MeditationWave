import { audioSource, type Audio } from '../../../../data'
import { initialState } from "../../../../context/appSlice"


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

type ToggleAlert = (value: React.SetStateAction<boolean>) => void
type ControlsSettings = React.Dispatch<React.SetStateAction<Controls>>
    
// funzione attiva disattiva componente setting
export const toggleSetting = (toggleAlert:ToggleAlert, controlsSettings:ControlsSettings):void => {
	toggleAlert(false)
	controlsSettings((prevControls: Controls) => {
		return {...prevControls, settings: !prevControls.settings}
	})
}
// Funzione componente setting imposta timer
export const timerSetting = (value: number, timing: "hours" | "minutes" | "seconds", controlsSettings:ControlsSettings):void => {
	controlsSettings((prevControls: Controls) => {
		const { timer } = prevControls
		return {...prevControls, timer: {...timer, [timing]: value}}
	})
}

// Funzione bottoni componente setting
export const buttonsSetting = (typeButton: "accept" | "back_reset", controlsSettings:ControlsSettings):void => {
	controlsSettings((prevControls:Controls):Controls => {
		const { start } = prevControls
		if (prevControls.timer.hours == 0 && prevControls.timer.minutes == 0 && prevControls.timer.seconds == 0){
			return {...prevControls, settings: !prevControls.settings, start: {...start, timer: false}}
		}
		else if (typeButton == "accept"){
			return { ...prevControls, settings: !prevControls.settings, start: {...prevControls.start, timer: true}, timer: {...prevControls.timer, decrementCircle: 100 / (((prevControls.timer.hours * 60) * 60) + (60 * prevControls.timer.minutes) + prevControls.timer.seconds)} }
		}
		else if (typeButton == "back_reset"){
			return { ...prevControls, settings: !prevControls.settings, start: {...start, timer: false}, timer: {hours: 0, minutes: 0, seconds: 0, circle: 100, decrementCircle: 0} }
		}
		else {
			return prevControls
		}
	})
}

// funzione componente play pausa stop
export const playPauseStopController = (typeButton: "play" | "pause" | "stop", state:initialState, toggleAlert:ToggleAlert, controls:Controls, controlsSettings:ControlsSettings, audioRef: React.MutableRefObject<HTMLAudioElement>) => {
	switch (typeButton) {
		case "stop":
			controlsSettings((prevControls:Controls) => {
				return { ...prevControls, timer: {hours: 0, minutes: 0, seconds: 0, circle: 100, decrementCircle: 0}, start: {timer: false, tracks: {onPlay: "", sourceAudio: audioSource}}, playPause: false} 
			})
			toggleAlert(false)
			break
		case "play": 
			if (!controls.start.timer){
				state.language == "ENG" 
				? controlsSettings((prevControls:Controls) => ({...prevControls, alert: "Set a timer first"}))
				: controlsSettings((prevControls:Controls) => ({...prevControls, alert: "Imposta prima un timer"}))
				toggleAlert(true)
			}
			else if (!controls.start.tracks.onPlay){
				state.language == "ENG" 
				? controlsSettings((prevControls:Controls) => ({...prevControls, alert: "Set a sound to play"}))
				: controlsSettings((prevControls:Controls) => ({...prevControls, alert: "Imposta un brano da riprodurre"}))
				toggleAlert(true)
			}
			else {
				controlsSettings((prevControls:Controls) => ({...prevControls, playPause: true}))
				toggleAlert(false)
				audioRef.current.play()
			}
			break
		case "pause": 
			audioRef.current.pause()
			controlsSettings((prevControls:Controls) => ({...prevControls, playPause: false}))
			break
		}
	setTimeout(()=>{
		toggleAlert(false)
	}, 4000)	
}

// funzione bottoni audio 
export const audioSelector = (onPlay: string, id:number, toggleAlert:ToggleAlert, controlsSettings:ControlsSettings) => {
	toggleAlert(false)
	controlsSettings((prevControls:Controls):Controls => {
		return prevControls.start.tracks.onPlay != onPlay ? {
			...prevControls,
			playPause: false,
			start: {
				...prevControls.start,
				tracks: { onPlay, sourceAudio: prevControls.start.tracks.sourceAudio.map((audio: Audio) => audio.id == id ? { ...audio, active: true } : { ...audio, active: false }) }
			}
		} : { ...prevControls }

	})
}
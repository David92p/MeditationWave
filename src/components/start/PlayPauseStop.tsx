import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Controls } from ".."
import { initialState } from "../../context/appSlice"
import { useStoreSelector } from "../../store/hooks"

type ToggleAlert = (value: React.SetStateAction<boolean>) => void
type ControlsSettings = React.Dispatch<React.SetStateAction<Controls>>

type PlayPauseStopType = {
  toggleAlert: ToggleAlert
  controls: Controls
  controlsSettings:ControlsSettings
  audioRef: React.MutableRefObject<HTMLAudioElement>
	playPauseStopController: (typeButton: "play" | "pause" | "stop", state:initialState, toggleAlert:ToggleAlert, controls:Controls, controlsSettings:ControlsSettings, audioRef: React.MutableRefObject<HTMLAudioElement>) => void
  playPause: boolean
}


const PlayPauseStop:React.FC<PlayPauseStopType> = ({ toggleAlert, controls, controlsSettings, audioRef, playPauseStopController, playPause }) => {
  const state = useStoreSelector((state) => state.globalReducer)
  return (
    <>
      <button onClick={() => playPauseStopController("stop", state, toggleAlert, controls, controlsSettings, audioRef)} className="text-white items-center py-1 sm:py-2 text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-24 sm:w-36 rounded-2xl">
        <FontAwesomeIcon icon={faStop} />
      </button>
      <button 
        onClick={
          playPause 
          ? () => playPauseStopController("pause", state, toggleAlert, controls, controlsSettings, audioRef) 
          : () => playPauseStopController("play", state, toggleAlert, controls, controlsSettings, audioRef)
          } 
        className="text-white items-center py-1 sm:py-2 text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-24 sm:w-36 rounded-2xl">
        {
          playPause 
          ? <FontAwesomeIcon icon={faPause} /> 
          : <FontAwesomeIcon icon={faPlay} />
        }
      </button>
    </>
  )
}

export default PlayPauseStop

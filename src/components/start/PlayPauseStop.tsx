import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type PlayPauseStopType = {
	playPauseStopController: (typeButton: "play" | "pause" | "stop") => void
  playPause: boolean
}


const PlayPauseStop:React.FC<PlayPauseStopType> = ({ playPauseStopController, playPause }) => {
  return (
    <>
      <button onClick={() => playPauseStopController("stop")} className="text-white items-center py-1 sm:py-2 text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-24 sm:w-36 rounded-2xl">
        <FontAwesomeIcon icon={faStop} />
      </button>
      <button className="text-white items-center py-1 sm:py-2 text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-24 sm:w-36 rounded-2xl">
        {playPause ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} onClick={() => playPauseStopController("play")} />}
      </button>
    </>
  )
}

export default PlayPauseStop

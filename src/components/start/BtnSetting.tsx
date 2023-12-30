import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type BtnSettingType = {
  toggleSetting: () => void
}

const BtnSetting:React.FC<BtnSettingType> = ({toggleSetting}) => {
  return (
    <button onClick={toggleSetting} className="text-white items-center py-1 sm:py-2 text-3xl sm:text-4xl md:text-5xl bg-amber-800 w-24 sm:w-36 rounded-2xl">
      <FontAwesomeIcon icon={faGear} />
    </button>
  )
}

export default BtnSetting

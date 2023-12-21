import rain  from "../../assets/sounds/rain.mp3"
import fire from "../../assets/sounds/fire.mp3"
import beach from "../../assets/sounds/beach.mp3"
import bird from "../../assets/sounds/bird.mp3"
import violin from "../../assets/sounds/violin.mp3"
import wind from "../../assets/sounds/wind.mp3"
import chords from "../../assets/sounds/chords.mp3"
import space from "../../assets/sounds/space.mp3"

import { faCloudRain, faFire, faWater, faDove, faGuitar, faMusic, faWind } from "@fortawesome/free-solid-svg-icons"
import { faSkyatlas } from "@fortawesome/free-brands-svg-icons"

const audioSource = [
    {
        id: 1,
        icon: faCloudRain, 
        source: rain
    },
    {
        id: 2,
        icon: faFire, 
        source: fire
    },
    {
        id: 3,
        icon: faWater, 
        source: beach
    },
    {
        id: 4,
        icon: faDove, 
        source: bird
    },
    {
        id: 5,
        icon: faGuitar, 
        source: violin
    },
    {
        id: 6,
        icon: faWind, 
        source: wind
    },
    {
        id: 7,
        icon: faMusic, 
        source: chords
    },
    {
        id: 8,
        icon: faSkyatlas, 
        source: space
    }
]

export  { audioSource }
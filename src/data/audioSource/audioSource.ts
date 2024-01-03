import rain  from "../../assets/sounds/rain.mp3"
import fire from "../../assets/sounds/fire.mp3"
import beach from "../../assets/sounds/beach.mp3"
import bird from "../../assets/sounds/bird.mp3"
import violin from "../../assets/sounds/violin.mp3"
import wind from "../../assets/sounds/wind.mp3"
import chords from "../../assets/sounds/chords.mp3"
import space from "../../assets/sounds/space.mp3"

import { faCloudRain, faFire, faWater, faDove, faGuitar, faMusic, faWind, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { faSkyatlas } from "@fortawesome/free-brands-svg-icons"

type Audio = {
    id: number;
    icon: IconDefinition;
    source: string;
    active: boolean
}

const audioSource:Audio[] = [
    {
        id: 1,
        icon: faCloudRain, 
        source: rain, 
        active: false
    },
    {
        id: 2,
        icon: faFire, 
        source: fire,
        active: false
    },
    {
        id: 3,
        icon: faWater, 
        source: beach,
        active: false
    },
    {
        id: 4,
        icon: faDove, 
        source: bird,
        active: false
    },
    {
        id: 5,
        icon: faGuitar, 
        source: violin,
        active: false
    },
    {
        id: 6,
        icon: faWind, 
        source: wind,
        active: false
    },
    {
        id: 7,
        icon: faMusic, 
        source: chords,
        active: false
    },
    {
        id: 8,
        icon: faSkyatlas, 
        source: space,
        active: false
    }
]

export  { audioSource }
export type { Audio }
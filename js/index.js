import Sound from "./sounds.js"
import Timer from "./timer.js"
import { playButton,
    pauseButton,
    minutesDisplay,
    secondsDisplay} from "./elements.js"

import Events from "./events.js";

const sounds = Sound()
const timer = Timer({minutesDisplay,
secondsDisplay,
playButton,
pauseButton})
const events = Events({timer, sounds})

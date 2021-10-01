import throttle from 'lodash.throttle'
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
player.on("timeupdate", throttle(timeLoger, 1000))

function timeLoger(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds)
}


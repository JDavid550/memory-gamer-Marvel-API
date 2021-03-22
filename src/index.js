import Play from './Play'
import Counter from './plugins/counter'
import AutoPlay from './plugins/autoplay'
import Chronometer from './plugins/chronometer'

const audio = document.querySelector('audio')
const cardCollection = document.getElementById('card-collection')

let gameSession = new Play({
    timerState: 0,
    audio : audio,
    plugins : [
        new Counter(), 
        new AutoPlay(),
    ]
})

gameSession.fetch();
gameSession.flipCard();

cardCollection.onclick = ()=> gameSession.toggleTimerStart()


/////////////////////////




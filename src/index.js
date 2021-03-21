import Play from './Play'
import Counter from './plugins/counter'
import AutoPlay from './plugins/autoplay'
import Chronometer from './plugins/chronometer'

const audio = document.querySelector('audio')

let gameSession = new Play({
    audio : audio,
    plugins : [new Counter(), new AutoPlay(), new Chronometer()]
})

gameSession.fetch();
gameSession.flipCard();


/////////////////////////




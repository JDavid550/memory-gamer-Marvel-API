import Play from './Play'
import Counter from './plugins/counter'
import AutoPlay from './plugins/autoplay'

const audio = document.querySelector('audio')

let gameSession = new Play({
    audio : audio,
    plugins : [new Counter(), new AutoPlay()]
})

gameSession.fetch();
gameSession.flipCard();


/////////////////////////




import Play from './Play'
import Counter from './plugins/counter'
import AutoPlay from './plugins/autoplay'


const audio = document.querySelector('.background-audio')
const cardCollection = document.getElementById('card-collection')
const playAgainButton = document.querySelector('.play-again-button')

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
playAgainButton.onclick = ()=> location.reload()

/////////////////////////




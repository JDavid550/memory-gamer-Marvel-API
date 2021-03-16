import Play from './Play'
import flipCard from './flipCard'


let gameSession = new Play({
    plugins : []
})

gameSession.fetch();
gameSession.flipCard();


/////////////////////////




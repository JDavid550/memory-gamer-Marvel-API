import Play from './Play'
import Counter from './plugins/counter'


let gameSession = new Play({
    plugins : [new Counter()]
})

gameSession.fetch();
gameSession.flipCard();


/////////////////////////




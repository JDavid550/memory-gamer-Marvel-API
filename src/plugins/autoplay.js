function AutoPlay (){}

AutoPlay.prototype.run = function(gameSession){
    const cardCollection = document.querySelector('.card-collection')
    cardCollection.addEventListener('click',()=>{
        gameSession.play();
    })
}

export default AutoPlay;
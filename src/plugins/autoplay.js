function AutoPlay (){}

AutoPlay.prototype.run = function(gameSession){
    const buttonCountainer = document.getElementById('muteUnmuteContainer')
    const muteButton = document.createElement('img')
    muteButton.src = "https://img.icons8.com/windows/25/ffffff/high-volume--v3.png";
    const cardCollection = document.querySelector('.card-collection')
    cardCollection.addEventListener('click',()=>{
        gameSession.play();
        buttonCountainer.appendChild(muteButton)

    })
    muteButton.addEventListener('click', ()=>{
        gameSession.muteUnmute();
        if (muteButton.src == "https://img.icons8.com/windows/25/ffffff/high-volume--v3.png") {
            muteButton.src = "https://img.icons8.com/windows/25/ffffff/no-audio--v3.png"
        }else if(muteButton.src = "https://img.icons8.com/windows/25/ffffff/no-audio--v3.png"){
            muteButton.src = "https://img.icons8.com/windows/25/ffffff/high-volume--v3.png"
        }
    })

}

export default AutoPlay;
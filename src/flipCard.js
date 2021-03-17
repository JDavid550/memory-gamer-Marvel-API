import showImage from './utils/showImage'

///This funcionality is in charge to flip the cards everytime they're clicked. It includes the condition to prevent the matched cards flip again.
const flipCard = ()=>{
    
    let cards = []
    let cardsFront = []
    let clicklist = []
    setTimeout(()=>{
        cards = document.querySelectorAll('.card')
        cardsFront = document.querySelectorAll('.card-front')
        //console.log(cards);
        //console.log(cardsFront)
        for (let i = 0; i < cardsFront.length; i++) {
            cardsFront[i].addEventListener('click',()=>{
                clicklist.push(i)
                console.log(clicklist)
                showImage(cards,i)
                if (cards[clicklist[clicklist.length-1]].children[1].children[0].attributes[1].nodeValue !== cards[clicklist[clicklist.length-2]].children[1].children[0].attributes[1].nodeValue) {
                    for (let j = 0; j < cards.length; j++) {
                        
                        cards[j].classList.remove('spin')
                    }
                    showImage(cards,i)
                    
                } else {
                    console.log('son iguales')
                    showImage(cards,i)
                    let lastTwoClickedCards = [];
                    lastTwoClickedCards.push(cards[clicklist[clicklist.length-1]],cards[clicklist[clicklist.length-2]])
                    console.log(lastTwoClickedCards)
                    for (let k = 0; k < lastTwoClickedCards.length; k++) {
                        lastTwoClickedCards[k].setAttribute('class','static')
                    }
                } 
                //console.log('Anterior es ' + clicklist[clicklist.length-2])
                
                //console.log(cards[i].children[1].children[0].attributes[1].nodeValue)
                
            })
        }
    },2000)
    
}

export default flipCard;

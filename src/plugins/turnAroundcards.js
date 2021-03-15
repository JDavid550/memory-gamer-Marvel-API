let clicklist = []
const turnAroundCard = () =>{
    setTimeout(()=>{
        let cards = document.querySelectorAll('.card')
        let cardsFront = document.querySelectorAll('.card-front')
        console.log(cards);
        
        for (let i = 0; i < cardsFront.length; i++) {
            cardsFront[i].addEventListener('click',()=>{
                clicklist.push(i)
                console.log(clicklist)
                if (cards[clicklist[clicklist.length-1]].children[1].children[0].attributes[1].nodeValue !== cards[clicklist[clicklist.length-2]].children[1].children[0].attributes[1].nodeValue) {
                    for (let j = 0; j < cards.length; j++) {
                            
                        cards[j].classList.remove('spin')
                    }
                    cards[i].classList.add('spin')
                } else {
                    console.log('son iguales')
                    cards[i].classList.add('spin')
                } 
                //console.log('Anterior es ' + clicklist[clicklist.length-2])
                
                //console.log(cards[i].children[1].children[0].attributes[1].nodeValue)
                
            })
        }
    },2000)
}

export default turnAroundCard;

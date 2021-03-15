

const turnAroundCard = () =>{
    setTimeout(()=>{

        let cards = document.querySelectorAll('.card')
        let cardsFront = document.querySelectorAll('.card-front')
        console.log(cards);
        for (let i = 0; i < cardsFront.length; i++) {
            cardsFront[i].addEventListener('click',()=>{
                for (let j = 0; j < cards.length; j++) {
                    
                    cards[j].classList.remove('spin')
                    
                }
                console.log(cards[i].children[1].children[0].attributes[1].nodeValue)
                cards[i].classList.add('spin') 

            })
        }
    },2000)
}

export default turnAroundCard;
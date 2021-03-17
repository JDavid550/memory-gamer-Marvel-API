

function Counter(){}

let counter = document.getElementById('movements-counter')
let zero = document.querySelector('.Zero')
Counter.prototype.run = function(){
    setTimeout(()=>{
        let cardHolders = document.querySelectorAll('.card-holder')
        cardHolders = [...cardHolders]
        //console.log(cardHolders)
        let clicksList = []
        cardHolders.forEach((cardHolder)=>{
            cardHolder.addEventListener('click',()=>{
                clicksList.push('click')
                //console.log(clicksList)
                if (clicksList.length%2 == 0) {
                    //console.log('es par la lista')
                    //console.log(clicksList.length)
                    //console.log(counter.childNodes.length-1)
                    for (let i = 3; i < counter.childNodes.length; i++) {
                        zero.remove()
                        counter.childNodes[i].remove()
                    }
                    let countNumber = document.createElement('h2')
                    countNumber.className = 'countNumber'
                    counter.appendChild(countNumber)
                    countNumber.textContent = clicksList.length/2                    
                }
            })
        })
    },2000)
    
}

export default Counter;
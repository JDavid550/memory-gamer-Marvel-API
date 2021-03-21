function Chronometer (){}

Chronometer.prototype.run = function (){
    let cardColletcion = document.getElementById('card-collection')
    window.onload = ()=>{
        setTimeout(()=>{
            console.log('Heyy')
            let minutes = document.getElementById('minutes')
            let seconds = document.getElementById('seconds')
            let minutesCounter = 0
            let secondsCounter = 0

            window.setInterval(()=>{
                if (secondsCounter == 60) {
                    secondsCounter = 0
                    minutesCounter++
                    minutes.innerHTML ='0' + minutesCounter
                    if (minutesCounter == 0) {
                        minutesCounter = 0
                    }
                }
                if (secondsCounter < 10) {
                    seconds.innerHTML = '0'+secondsCounter
                }else{
                    seconds.innerHTML = secondsCounter
                }
                
                secondsCounter++
            },1000)
            
        },2000)
    } 
}

export default Chronometer;
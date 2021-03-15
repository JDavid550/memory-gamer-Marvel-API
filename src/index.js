import getData from './utils/getData';
import shuffle from './utils/shuffle';
import Play from './Play';

//Quedé en añadir los elementos html a aca con get element...


const deploy = async ()=>{
    const characters = await getData();

    const cardCollection = document.getElementById('card-collection');
    let random_numbers = [];
    for (let i = 0; i < 8; i++) {
        let counter = Math.floor(Math.random()*((characters.length-1)-1+1)+1);

        let included = random_numbers.includes(counter)

        included == false
            ? random_numbers.push(counter)
            : random_numbers.push(Math.ceil(counter/2))
    }

    let secondListOfRandomNumber = Array.from(random_numbers).concat(random_numbers)
    let shuffledList = shuffle(secondListOfRandomNumber);

    for (let i = 0; i < shuffledList.length; i++) {
        cardCollection.innerHTML += ` 
            <div class="card-holder">
                <div class="card">
                    <div class="card-front">
                        
                    </div>
                    <div class="card-back">
                        <img class=card src="${characters[shuffledList[i]].thumbnail.path}.${characters[shuffledList[i]].thumbnail.extension}">
                    </div>
                </div>
            </div>` 
        
    }
    
}

deploy();


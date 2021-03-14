import getData from './utils/getData';
import Play from './Play';

//Quedé en añadir los elementos html a aca con get element...


const deploy = async ()=>{
    const characters = await getData();
    console.log(characters.length)
    const cardCollection = document.getElementById('card-collection');
    let random_numbers = [];
    for (let i = 0; i < 16; i++) {
        let counter = Math.floor(Math.random()*((characters.length-1)-1+1)+1);
        console.log(counter)
        let included = random_numbers.includes(counter)
        console.log(included)
        included == false
            ? random_numbers.push(counter)
            : random_numbers.push(Math.ceil(counter/2))

        cardCollection.innerHTML += ` 
        
        <div class="card-holder">
            <div class="card">
                <div class="card-front">
                    
                </div>
                <div class="card-back">
                    <img class=card src="${characters[random_numbers[i]].thumbnail.path}.${characters[random_numbers[i]].thumbnail.extension}">
                </div>
            </div>
        </div>` 
    }
    
}

deploy();


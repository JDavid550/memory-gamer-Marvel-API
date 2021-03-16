import getData from './utils/getData';
import shuffle from './utils/shuffle';

/// This is an asyncronous function that allows to "filter" the images from the API and deploy them over the DOM

/// The quantity of images that the API allows us to pull is 100. But, in this case, I only use 8 images to play with. I use a loop to generate a list of 8 random numbers whereas a condition is set within the loop to veify that there won't be repeated numbers.

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

///As I designed the game to have 16 cards, It's necessary to make a list with the double quantity of cards to have pairs. 

///This function doubles the previous list with the same elements an then it shuffles them and deploy the cards over the DOM

    let secondListOfRandomNumber = Array.from(random_numbers).concat(random_numbers)
    let shuffledList = shuffle(secondListOfRandomNumber);
    console.log(shuffledList);
    for (let i = 0; i < shuffledList.length; i++) {
        cardCollection.innerHTML += ` 
            <div class="card-holder">
                <div class="card">
                    <div class="card-front">
                        
                    </div>
                    <div class="card-back">
                        <img class=card-image src="${characters[shuffledList[i]].thumbnail.path}.${characters[shuffledList[i]].thumbnail.extension}">
                    </div>
                </div>
            </div>` 
        
    }
}

export default deploy;

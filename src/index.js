import getData from './utils/getData';
import Play from './Play';

//Quedé en añadir los elementos html a aca con get element...


const deploy = async ()=>{
    const characters = await getData();
    console.log(characters)
    const main = document.getElementById('Main');
    let random_numbers = [];
    for (let i = 0; i < 16; i++) {
        let counter = Math.floor(Math.random()*(69-1+1)+1);
        random_numbers.push(counter);
        console.log(random_numbers);
        main.innerHTML += `<img class=card src="${characters[random_numbers[i]].thumbnail.path}.${characters[random_numbers[i]].thumbnail.extension}"> ` 
    }
    
}

deploy();


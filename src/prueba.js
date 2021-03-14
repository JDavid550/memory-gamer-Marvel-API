let altnumbers = [];

function run() {
    for (let i = 0; i < 8; i++) {
        let counter = Math.floor(Math.random()*(100-1+1)+1)
        let included = altnumbers.includes(counter)
        included == false
            ? altnumbers.push(counter)
            : altnumbers.push(Math.ceil(counter/2))
        
    }
}
run();
console.log(altnumbers);

let secondList = [];

function generateSecondList() {
    secondList = Array.from(altnumbers)
}

generateSecondList();
let finalList = altnumbers.concat(secondList)
console.log(finalList);


function shuffel(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex -= 1

        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue

    }
    return array
}

console.log(shuffel(finalList))



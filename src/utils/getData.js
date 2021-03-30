const API = 'https://gateway.marvel.com/v1/public/characters?limit=100&offset=200&ts=1&apikey=9d1213bcbc5b3fd8b46eb731651494fa&hash=0625ad92b2f50b8ee1ca09827ba36f69'
const IMAGE_NOT_AVAILABLE = "https://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"

///This is the first functionality of the project

///Basically this pull the data from the API under two conditions: The thumbnail path can't be an image not available nor having the extension gif.

///It returns the data to be invoked in the deploy plugin file.

const getData = async ()=>{
    try {
        const response = await fetch(API);
        let data = await response.json();
        let results = [];
        results = Object.values(data.data.results);
        let list = [];
        for (let i = 0; i < results.length; i++) {
            if (results[i].thumbnail.path !== IMAGE_NOT_AVAILABLE && results[i].thumbnail.extension !== "gif") {
                list.push(results[i])
            }
        }
        data=list;
        return data

    } catch (error) {
        console.log('Fetch error', error);
    }
    
}

export default getData;
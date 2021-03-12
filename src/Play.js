import getData from './utils/getData'

function Play(config) {
    this.card = config.el
    this.plugins = config.plugins
    this._initplugin = config.plugin || [];
}

Play.prototype.fetch = async function () {

    const characters = await getData();
    const main = document.getElementById('Main');
    main.innerHTML += `<img src="${characters.data.results[0].thumbnail.path}/portrait_medium.${characters.data.results[0].thumbnail.extension}"> ` 
    
}
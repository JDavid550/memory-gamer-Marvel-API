import deploy from './deployData'
import flipCard from './flipCard'


///This is the object the rest of the methods is created
///I'm using the prototype method to instance the object Play

function Play(config) {
    this.plugins = config.plugins || []
    //this._initPlugins;
}

/* Play.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
} */

Play.prototype.fetch =  async function () {
    await deploy();
}

Play.prototype.flipCard = function (){
    flipCard();
}


export default Play;
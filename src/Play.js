import deploy from './utils/deployData'
import flipCard from './plugins/flipCard'

///This is the object the rest of the methods is created
///I'm using the prototype method to instance the object Play

function Play(config) {
    this.plugins = config.plugins || []
}

Play.prototype.fetch =  async function () {
    await deploy();
}

Play.prototype.flipCard = function (){
    flipCard();
}


export default Play;
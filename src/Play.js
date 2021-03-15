import deploy from './utils/deployData'
import turnAroundCard from './plugins/turnAroundcards'

function Play(config) {
    this.plugins = config.plugins || []
}

Play.prototype.fetch =  async function () {
    await deploy();
}

Play.prototype.turnAroundCard = function (){
    turnAroundCard();
}


export default Play;
import deploy from './deployData'
import flipCard from './flipCard'
import Chronometer from '../src/plugins/chronometer'


///This is the object the rest of the methods is created
///I'm using the prototype method to instance the object Play

function Play(config) {
    this.timerState = config.timerState
    this.media = config.audio
    this.plugins = config.plugins || []
    this._initPlugins();
}

Play.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })}


Play.prototype.fetch =  async function () {
    await deploy();
}

Play.prototype.flipCard = function (){
    flipCard();
}

Play.prototype.play = function(){
    this.media.play();
}

Play.prototype.mute = function(){
    this.media.muted = true;
}

Play.prototype.muteUnmute = function(){
    if(this.media.muted){
        this.media.muted = false;
    }else{
        this.media.muted =true;
    }
}

Play.prototype.toggleTimerStart = function(){
    if (this.timerState == 0) {
        this.timerState = 1
        if (this.timerState == 1) {
            Chronometer();
        }
        console.log('connected')
    } else {
        console.log('not connected')
    }
}

export default Play;
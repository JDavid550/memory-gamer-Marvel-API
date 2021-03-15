import deploy from './utils/deployData'

function Play(config) {
    this.plugins = config.plugins
    this._initplugin = config.plugin || [];
}

Play.prototype.fetch =  async function () {
    await deploy();
}
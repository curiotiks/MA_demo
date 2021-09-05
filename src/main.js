import Phaser from 'phaser'

// import HelloWorldScene from './scenes/HelloWorldScene'
// import NewScene from './scenes/NewScene'
import MakingMeans from './scenes/makingMeans'

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [MakingMeans]
}

export default new Phaser.Game(config)
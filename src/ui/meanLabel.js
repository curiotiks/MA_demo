import Phaser from 'phaser'

const meanFormat = (mean) => `Mean: ${mean}`

export default class meanLabel extends Phaser.GameObjects.Text{
    constructor(scene, x, y, mean, style){
        super(scene, x, y, mean, style)
        this.mean = mean
    }
    
    //Update mean value
    updateMean(mean){
        this.setText(meanFormat(mean))
    }



}




/** 
 * Because this extends the text class, I can only have six arguments. 
 * Meaning, I need to calculate the mean value outside of this class
 * and then feed the value into here to dispaly/update the text onscreen.
*/
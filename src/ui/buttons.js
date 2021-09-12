import Phaser from 'phaser'

export default class Buttons extends Phaser.GameObjects.Container
{

    
    constructor(scene,x,y,img_off, img_over)
    {
        super(scene,x,y)
        
        this.upImage = scene.add.image(0,0,img_off)
        this.overImage = scene.add.image(0,0,img_over)
        
        this.add(this.upImage)
        this.add(this.overImage)

        this.overImage.setVisible(false)

        this.setSize(this.upImage.width, this.upImage.height)

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.upImage.setVisible(false)
                this.overImage.setVisible(true)
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.overImage.setVisible(false)
                this.upImage.setVisible(true)
            })

        }
        
    }
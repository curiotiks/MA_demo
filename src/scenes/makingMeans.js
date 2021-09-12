import Phaser from 'phaser'
import Buttons from '../ui/buttons.js'


const meanFormat = (meanValue) => `Mean Value: ${meanValue}`

export default class MakingMeans extends Phaser.Scene {
    constructor() {
        super('makingmeans')
        this.table = []
        this.meanValue = 0   
    }

    preload() {
        this.load.image('sky', 'assets/sky.png')

        this.load.image('b1', 'assets/buttons_v1/b1_out.png')
        this.load.image('b1_over','assets/buttons_v1/b1_over.png')

        this.load.image('b2', 'assets/buttons_v1/b2_out.png')
        this.load.image('b2_over','assets/buttons_v1/b2_over.png')

        this.load.image('b3', 'assets/buttons_v1/b3_out.png')
        this.load.image('b3_over','assets/buttons_v1/b3_over.png')

        this.load.image('b4', 'assets/buttons_v1/b4_out.png')
        this.load.image('b4_over','assets/buttons_v1/b4_over.png')

        this.load.image('b5', 'assets/buttons_v1/b5_out.png')
        this.load.image('b5_over','assets/buttons_v1/b5_over.png')

        this.load.image('b6', 'assets/buttons_v1/b6_out.png')
        this.load.image('b6_over','assets/buttons_v1/b6_over.png')

        this.load.image('b7', 'assets/buttons_v1/b7_out.png')
        this.load.image('b7_over','assets/buttons_v1/b7_over.png')

        this.load.image('b8', 'assets/buttons_v1/b8_out.png')
        this.load.image('b8_over','assets/buttons_v1/b8_over.png')

        this.load.image('b9', 'assets/buttons_v1/b9_out.png')
        this.load.image('b9_over','assets/buttons_v1/b9_over.png')
    }

    create() {
        //Background
        this.add.image(400, 300, 'sky')
        
    //Row One
        //Button One
        const but1 = new Buttons(this,100,100,'b1', 'b1_over')
        this.add.existing(but1)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(1)
                console.log(this.table)
            })
        
        //Button Two
        const but2 = new Buttons(this,175,100,'b2', 'b2_over')
        this.add.existing(but2)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(2)
                console.log(this.table)
            })

        //Button Three
        const but3 = new Buttons(this,250,100,'b3', 'b3_over')
        this.add.existing(but3)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(3)
                console.log(this.table)
            })
    //Row Two
        //Button Four
        const but4 = new Buttons(this,100,200,'b4', 'b4_over')
        this.add.existing(but4)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(4)
                console.log(this.table)
            })
        
        //Button Five
        const but5 = new Buttons(this,175,200,'b5', 'b5_over')
        this.add.existing(but5)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(5)
                console.log(this.table)
            })

        //Button Six
        const but6 = new Buttons(this,250,200,'b6', 'b6_over')
        this.add.existing(but6)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(6)
                console.log(this.table)
            })

    //Row Three
        //Button Seven
        const but7 = new Buttons(this,100,300,'b7', 'b7_over')
        this.add.existing(but7)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(7)
                console.log(this.table)
            })
        
        //Button Eight
        const but8 = new Buttons(this,175,300,'b8', 'b8_over')
        this.add.existing(but8)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(8)
                console.log(this.table)
            })

        //Button Nine
        const but9 = new Buttons(this,250,300,'b9', 'b9_over')
        this.add.existing(but9)
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.table.push(9)
                console.log(this.table)
            })
        
        
            // Need a button to update the mean values
    }

    update() 
    {
        this.add.text(300,300, this.table.join())
        this.add.text(400,400, meanFormat(this.meanValue))
    }


    /* 
    Last tutorial I was watching: 
    https://www.youtube.com/watch?v=yWlILdKrbqQ 
    ## Display class
    — Make text on screen to print out the mean values

    ## Input class
    — create a button that adds a random number to the array
    — Create buttons 1 though 10 to add specific numbers to the array

    ## Stats class
    — Move the makeMean to a new class
    — Figure out how to round the mean value
    */


    // Statistical Functions
    makeMean(table) {

        let total = 0

        this.table.forEach(element => {
            total += element
        });

        return (total / table.length)

    }

}
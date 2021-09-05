import Phaser from 'phaser'

export default class MakingMeans extends Phaser.Scene {
    constructor() {
        super('makingmeans')
        this.hopper = undefined

    }

    preload() {
        this.load.image('sky', 'assets/sky.png')
    }

    create() {
        this.add.image(400, 300, 'sky')
        this.hopper = [3, 4, 7, 2, 6, 1, 9, 10, 23, 1, 4, 0]
        console.log(this.makeMean(this.hopper)) // Out putting the mean to console

    }


    /* 
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
    makeMean(hopper) {

        let total = 0

        this.hopper.forEach(element => {
            total += element
        });

        return (total / hopper.length)

    }

}
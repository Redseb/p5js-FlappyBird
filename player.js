/* 
player.js contains the player class used in the Flappy Bird p5.js game.
This class is responsible for keeping track of a player's coordinates and size.
It is also responsible for the gravity in the game.

contructor() is called when player is created, sets initial values

move() contains the controls for the player and gravity

display() draws the player as a purple ellipse onto the canvas
*/

class Player{
    constructor(){
        this.x = 50;
        this.y = screenHeight/2;
        this.height = 50;
        this.width = 50;

        this.speed = 5; //Movement speed
        this.initGravity = 0.25;
        this.currGravity = 0.25;
    }

    move(){
        if(keyIsPressed == true){
            if(key == 'w'){ //Move left
                this.y -= this.speed;
                this.currGravity = this.initGravity; //Reset gravity
            }
        }
            this.currGravity = this.currGravity + this.initGravity; //Increase gravity (linearly...)
            this.y += this.currGravity; //Apply gravity

            if (this.y < -70){
                this.y = -30;
            } else if(this.y > screenHeight + 50){
                this.y = screenHeight/2;
                score = 0;
                this.currGravity = this.initGravity; //Reset gravity
            }
    }
    display(){
        fill(200,0,230);
        ellipse(this.x, this.y, this.height, this.width);
    }
}
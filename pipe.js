/* 
pipe.js contains the Pipe class which keeps track of a pipe's coordinates and size
A pipe will move left at a set speed and will reset its x position when it goes out of bound.
Furthermore the pipe will randomly move up or down

contructor(x,y) is called when a pipe is created, it initializes the pipe's variables.
The parameters x and y will set the pipe's initial x and y position respectively

move(yOffset) is responsible for moving the pipe left right up down

display() draws the pipe as a green rectangle
*/

class Pipe{
    constructor(x,y){
        this.x = x;
        this.initX = x;
        this.y = y;
        this.initY = y;
        this.height = screenHeight;
        this.width = 50;

        this.speed = 5;
    }

    move(yOffset){
        if(this.x < 0 - this.width){ //If the pipe goes off screen move it back to original position
            this.x = this.initX;
            this.y = this.initY + yOffset;
            score += 50; //50 per pipe so 100 per gap
        }

        this.x -= this.speed; //Move pipe left
    }

    display(){
        fill(0,255,0);
        rect(this.x, this.y, this.width, this.height);
    }
}
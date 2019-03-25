let screenWidth = 400;
let screenHeight = 400;

let player1;


function setup(){
    createCanvas(screenWidth,screenHeight);
    player = new Player();
}

function draw(){
    background(220);
    player.display();
    player.move();
}

class Player{
    constructor(){
        this.x = screenWidth/2;
        this.y = screenHeight/2;
        this.height = 50;
        this.width = 50;

        this.speed = 5; //Movement speed
    }

    move(){
        if(keyIsPressed == true){
            if(key == 'a'){ //Move left
                this.x -= this.speed;
            } else if (key == 'd'){ //Move right
                this.x += this.speed;
            } else if (key == 'w'){ //Move up
                this.y -= this.speed;
            } else if (key == 's'){ //Move down
                this.y += this.speed;
            }
        }
    }

    display(){
        fill(200,0,230);
        ellipse(this.x, this.y, this.height, this.width);
    }
}
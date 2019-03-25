let screenWidth = 256;
let screenHeight = 512;

let player1;
let topPipe;
let bottomPipe;

//Default BG color
let backgroundColorRed = 255;
let backgroundColorBlue = 200;
let backgroundColorGreen = 150;

let score = 0;

function setup(){
    createCanvas(screenWidth,screenHeight);
    //Create objects
    player1 = new Player();
    /* Top and bottom pipe are separated, speeds are the same, initial x positions are same */
    bottomPipe = new Pipe(600,400);
    topPipe = new Pipe(600, -250);
    //No stroke makes the game's shapes have no outlines
    noStroke();
}

function draw(){
    background(backgroundColorRed, backgroundColorGreen, backgroundColorBlue);
    player1.display();
    player1.move();

    //Random numbers allow us to randomly move the pipes up and down
    let maxOffset = 100;
    let minOffset = -250;
    var yOffset =Math.floor(Math.random() * (+maxOffset - +minOffset)) + +minOffset; 

    topPipe.display();
    topPipe.move(yOffset);
    bottomPipe.display();
    bottomPipe.move(yOffset);

    //Create a white box and text to display the score in the bottom left corner
    let scoreText = "Score: " + score;
    textSize(16);
    fill(255);
    rect(5, screenHeight-25, 160, 20);
    fill(0);
    text(scoreText, 10,  screenHeight -10);

    //Determine if the player has collided with a pipe
    let collideTop = circleRectCollide(player1.x, player1.y, player1.width, topPipe.x, topPipe.y, topPipe.width, topPipe.height);
    let collideBottom = circleRectCollide(player1.x, player1.y, player1.width, bottomPipe.x, bottomPipe.y, bottomPipe.width, bottomPipe.height);

    //If the player collides with pipe reset score and change background color randomly
    if(collideTop || collideBottom){
        score = -100;
        backgroundColorRed = Math.floor(Math.random() * (+120 - + 0)) + +0;
        backgroundColorGreen = Math.floor(Math.random() * (+120 - + 0)) + +0;
        backgroundColorBlue = Math.floor(Math.random() * (+120 - + 0)) + +0;
    }
}

function circleRectCollide(cx, cy, cd, rx, ry, rw, rh){
    /* 
    Grabbed from https://stackoverflow.com/questions/21089959/detecting-collision-of-rectangle-with-circle/21096179
    by: markE
    */

    //Step#1: Find the vertical & horizontal (distX/distY) distances between the circle’s center and the rectangle’s center
    let distX = Math.abs(cx - rx-rw/2);
    let distY = Math.abs(cy - ry-rh/2);

    //Step#2: If the distance is greater than halfCircle + halfRect, then they are too far apart to be colliding
    let cr = cd /2;
    if (distX > (rw/2 + cr)) { return false; }
    if (distY > (rh/2 + cr)) { return false; }

    //Step#3: If the distance is less than halfRect then they are definitely colliding
    if (distX <= (rw/2)) { return true; } 
    if (distY <= (rh/2)) { return true; }

    //Step#4: Test for collision at rect corner.
    /*
    Think of a line from the rect center to any rect corner
    Now extend that line by the radius of the circle
    If the circle’s center is on that line they are colliding at exactly that rect corner
    */
    let dx=distX-rect.w/2;
    let dy=distY-rect.h/2;
    return (dx*dx+dy*dy<=(cr*cr));
}
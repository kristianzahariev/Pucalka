var myX = 0, myY = 550;
var vragX = 800, vragY = 0;
var patronX,patronY;
var OstavashtiUpdatiDoCoolDown = 0;
var score = 0;
var lives = 3;
var a = 0;


function update() {
    myY = myY + (mouseY - myY) / 10;

    if(myX + 4.00 == vragX && myY <= vragY + 100 && myY >= vragY){lives--;}
    
    if(vragY <= 0 ){
        vragY = 0;
    }

    if(patronX >= vragX && patronY <= vragY + 100 &&  patronY >= vragY && !(myX + 4 == vragX && myY <= vragY + 100 && myY >= vragY)){
        score++;

        vragX = 800;
        vragY = Math.random() * 400;
    }

    OstavashtiUpdatiDoCoolDown = OstavashtiUpdatiDoCoolDown - 1;
    vragX -= 4;

    if(vragX <= 0){
        vragX = 800;
        vragY = Math.random() * 400;
    }

    patronX = patronX + 4;

    if(areColliding(myX, myY, 30, 30,vragX, vragY, 30, 30)){
        lives--;
    }
    
}

function draw() {
    context.fillRect(myX, myY, 30, 30);
    context.fillRect(vragX, vragY, 100, 100);
    context.fillRect(patronX, patronY, 20 , 10);
    context.font="30px Arial"
    context.fillText("Score: " + score, 200, 530);
    context.fillText("Lives: " + lives, 35, 530);
    
};

function keyup(key) {
    console.log("Pressed", key);
};

function mouseup() {
    if(OstavashtiUpdatiDoCoolDown <= 0){
        patronX = myX;
        patronY = myY;
        OstavashtiUpdatiDoCoolDown = 150;
    }
    else{
        patronX = patronX + 4;
    }
    console.log("Mouse clicked at", mouseX, mouseY);
};

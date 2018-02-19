// Creating variables
var myX = 0, myY = 550;
var vragX = 800, vragY = 0
var patronX,patronY
var OstavashtiUpdatiDoCoolDown = 0
var score = 0;
var lives = 3;


function update() {
    myY = myY+(mouseY-myY)/10;
    if(vragY <= 0 ){
        vragY = 0
    }
    if(vragX <= myX){
        lives-- 
    }
    if(patronX <= vragX){
        score++ 
    }
    OstavashtiUpdatiDoCoolDown = OstavashtiUpdatiDoCoolDown -1;
    vragX = vragX - 3 
    if(vragX <= 0){
        vragX = 800
        vragY = Math.random() * 400;
    }
    patronX = patronX + 4   
    if(areColliding(myX, myY, 30, 30,vragX, vragY, 30, 30)){
            console.log("fras")
        lives--;
}
    
}

function draw() {
    // This is how you draw a rectangle
    context.fillRect(myX, myY, 30, 30);
    context.fillRect(vragX, vragY, 100, 100);
    context.fillRect(patronX, patronY, 20 , 10);
    context.font="30px Arial"
    context.fillText("Score: " + score, 200, 530);
    context.fillText("Lives: " + lives, 35, 530);
    
};

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};

function mouseup() {
    if(OstavashtiUpdatiDoCoolDown<=0){
    patronX = myX;
    patronY = myY;
    OstavashtiUpdatiDoCoolDown = 150;
    }
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};

function setup(){
    canvas = createCanvas(640, 420);
    canvas.centre();
}

img = "";

function preload(){
    img = loadImage('k.jpg');
}
function draw(){
    image(img, 0,0,640,420)
    fill("#FF0000");
    text("download.jfif" , 45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
}

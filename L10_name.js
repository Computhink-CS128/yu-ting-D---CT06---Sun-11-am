// write your codes here


function setup() {
    createCanvas(400,400);
    textAlign(CENTER,CENTER);
    interval = setInterval(countdow)
}
function draw() {
    background(220)

    let s = second();
    textSize(50);
    text(s,width/2,height/2);

    
}
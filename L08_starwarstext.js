// write your codes here
let ypos;
let favFood = ['Pizza','Burger','Sushi',"Tacos","Pasta","wsp gng","hiwo","im bored","i lov forsaken >:3","they say my hungers a problem"];

function setup() {
    createCanvas(600,600);

    fill(255,255,0);
    textSize(24);
    textAlign(CENTER);
    ypos = height;
}

function draw(){
    background(0);

    for (let i=0; i<favFood.length; i++) {
        text((i+1) + '.' + favFood[i], width/2,ypos + i*50);
    }
    ypos -= 4;
}
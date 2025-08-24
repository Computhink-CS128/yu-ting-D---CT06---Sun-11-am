function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // rect(600/2 - 100/2 ,400/2 - 100/2 ,100 ,100)

    for(let i; i>5; i++){
        fill(0,0,0+255)
        circle(x + i*50 ,y+ i*50,50)
    }
}

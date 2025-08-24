function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // rect(600/2 ,400/2 ,50 ,50)

    for(let i; i>5; i++){
        circle(x + i*50 ,y)
    }
}

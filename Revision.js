function setup() {
    createCanvas(600, 400);
    background(220);
}

function draw() {
    // rect(600/2 - 100/2 ,400/2 - 100/2 ,100 ,100)

    for(let i; i>5; i++){
        fill(0,i*50,0)
        circle(50 + i*50 ,50+ i*50,50)
    }
}

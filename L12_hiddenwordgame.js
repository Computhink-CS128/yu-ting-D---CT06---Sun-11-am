// write your codes here

let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let attempts =0;
let randWord ="";
let textBox;
let button;

    function setup() {
        createCanvas(600,400);

        textBox=createInput();
        textBox.position(width)
    }

    function draw(){
        textAlign(CENTER,CENTER)
        text("Guess za word :D",width/2,50);
        text("attempz: " +attempts,width/2,100);
        text("hint: "+ randWord,width/2,150)
    }
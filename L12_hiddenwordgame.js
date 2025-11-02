// write your codes here

let words = [
    "elephant", "backpack", "keyboard", "hospital", "sunlight", "raincoat", "notebook", "shoulder", 
    "football", "bathroom", "sandwich", "airplane", "umbrella", "medicine", "chocolate", "software", 
    "pineapple", "furniture", "telephone", "lighthouse"];
let attempts =0;
let randWord ="";
let textBox;
let button;
let textDis;

    function setup() {
        createCanvas(600,400);

        textBox=createInput();
        textBox.position(width/2-textBox.width/2,200);

        button=createButton('guess');
        button.position(width/2-textBox.width/2+textBox.width+30,200);
        button.mossePressed(display);

        randWord = random(words)
        randWord = randWord[0].toUpperCase()
    }

    function draw(){
        textAlign(CENTER,CENTER)
        text("Guess za word :D",width/2,50);
        text("attempz: " +attempts,width/2,100);
        text("hint: "+ randWord,width/2,150);
        text(textDis,width/2,250);
    }

    function display(){

        textDis = textBox.value();

    }
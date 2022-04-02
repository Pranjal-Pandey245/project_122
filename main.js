apple="";

function preload(){
  apple= loadImage("apple.png");
 }

x = 0;
y = 0;

draw_apple = "";
c_clear="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

    to_number= Number(content);

    if(Number.isInteger(to_number)){
      draw_apple="set";
    }

}

function setup() {
 
 canvas= createCanvas(1000,700);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";

    for(var i=1; i<=to_number; i++){
      console.log("yes");
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*500);
      image(apple,x,y,50,50);
    }

    draw_apple = "";


  }

  if(c_clear=="set"){
    canvas.clear();
    console.log("canvas");
    c_clear="";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}

function can_clear(){
  c_clear="set"
}
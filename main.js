var x=0;
var y=0;

draw_circle="";
draw_rect="";

var SpeechRecognition=window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="System is listening please speak.";
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="the speech has been recognised as "+content;

    if(content=="circle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing circle";
        draw_circle="set";
    }

    if(content=="rectangle"){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*600);
        document.getElementById("status").innerHTML="started drawing rectangle";
        draw_rect="set";
    }
}

function setup(){
    canvas= createCanvas(900,600);

}

function draw(){
    if(draw_circle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        draw_circle="";
        document.getElementById("status").innerHTML="circle is drawn.";
    }

    if(draw_rect=="set"){
        rect(x,y,70,50);
        draw_rect="";
        document.getElementById("status").innerHTML="rectanglr is drawn.";
    }
}

// todo:1 define  ==>  
// todo:2 fn to draw every shape ==>
// todo:3 btn calls the fn of its shape 
// todo:4


//! btns definitions

// var line = document.getElementById("line");
// var rectangle = document.getElementById("rec");
// var circle = document.getElementById("circle");

//! canvas definitions

var canvas = document.getElementById("my-canvas");
 const context = canvas.getContext('2d');
var pen = canvas.getContext("2d");

function drawRectangle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    // canvas.clear();
    pen.beginPath();
    pen.rect(90,75,190,150)
    pen.stroke();
    
    pen.fillStyle = "tomato"
    pen.fillRect (90,75,190,150)
    
}

function drawCircle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.strokeStyle="blue"
    pen.arc(500 , 75 , 50 ,0 , 2*Math.PI);
    pen.stroke();
    pen.fillStyle="orange"
    pen.arc(500 , 75 , 50 ,0 , 2*Math.PI);
    pen.fill();
}

function drawLine()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.strokeStyle="blue"
    pen.lineWidth="4"
   
    pen.moveTo(450,100)
    pen.lineTo(300 , 300)
   
    pen.stroke();
}

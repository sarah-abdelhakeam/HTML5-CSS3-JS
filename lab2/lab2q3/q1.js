//!rectangle filled

var canvas = document.getElementById("my-canvas");

//! btns definitions

// var flag ; //false means strok
// var fillStyle = document.getElementById("fill");
// var strokeStyle=document.getElementById("strok");

function checkfill()
{
   if(document.getElementById("rec").onclick=function()
   {
    fillRectangle();
   }) ;
    
    if(document.getElementById("circle").onclick =function()
    {
        fillCircle();
    });

}

function checkstrok()
{
    if(document.getElementById("rec").onclick=function()
    {
        drawRectangle()
    }) ;
     
     if(document.getElementById("circle").onclick =function()
     {
        drawCircle()
     });
}

//! canvas definitions

var canvas = document.getElementById("my-canvas");
 const context = canvas.getContext('2d');
var pen = canvas.getContext("2d");

function clearAll()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function fillRectangle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    
    pen.fillStyle = "tomato"
    pen.fillRect (90,75,190,150)
    
}

function drawRectangle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.rect(90,75,190,150)
    pen.stroke();
    
}

function fillCircle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.fillStyle="orange"
    pen.arc(500 , 75 , 50 ,0 , 2*Math.PI);
    pen.fill();
}
function drawCircle()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    pen.beginPath();
    pen.strokeStyle="blue"
    pen.arc(500 , 75 , 50 ,0 , 2*Math.PI);
    pen.stroke();
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
function freeDrawing(e)
{
    var drawFlag = false;
    var sp = {x:0 , y:0}; //start point
    var ep = {x:0 , y:0}; //end point

    canvas.addEventListener("mousedown",startDrawing);
    canvas.addEventListener("mouseup",endDrawing);
    canvas.addEventListener("mousemove", countinueDrawing);
    
    function startDrawing(e){
        pen.beginPath();
        sp.x=e.offsetX;
        sp.y=e.offsetY;
        pen.moveTo(sp.x,sp.y);
        drawFlag = true;

    }
    function endDrawing(e)
    {
        drawFlag = false;
    }
    function countinueDrawing(e)
    {
        if(drawFlag)
        {
            ep.x = e.offsetX;
            ep.y = e.offsetY;
            pen.lineTo(ep.x , ep.y);
            pen.stroke();
        }
    }
    
}




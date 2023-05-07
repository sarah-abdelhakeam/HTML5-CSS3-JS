
var audio = document.getElementById('audio');


var play1 = document.getElementById('playbtn');
var pause1 = document.getElementById('pusebtn');
var repeated = document.getElementById('repeatbtn');
var shuffle = document.getElementById('shufflebtn');


var song1 = document.getElementById('song1btn');
var song2 = document.getElementById('song2btn');
var song3 = document.getElementById('song3btn');
var song4 = document.getElementById('song4btn');
var song5 = document.getElementById('song5btn');


//play btn
play1.addEventListener("click", ()=>{
    audio.play();
})

//pause btn
pause1.addEventListener("click", ()=> 
{
    audio.pause();
})


//repeat btn
repeated.addEventListener("click",()=>{

    audio.currentTime = "0";
    audio.play();
    
})

//shuffel brn

shuffle.addEventListener("click", ()=>{
    let audio_list=["aud1" , "aud2" , "aud3" , "aud4" , "aud5"];
    var shuff = audio_list[Math.floor(Math.random() * 6)];

    if(shuff=="aud1")
    {
        audio.src="./media/1.mp3";
        audio.play();
    }
    else if(shuff=="aud2")
    {
        audio.src="./media/2.mp4";
        audio.play();
    }
    else if(shuff=="aud3")
    {
        audio.src="./media/3.mp3";
        audio.play();
    }
    else if(shuff=="aud4")
    {
        audio.src="./media/4.mp4";
        audio.play();
    }
    else if(shuff=="aud5")
    {
        audio.src="./media/5.mp4";
        audio.play();
    }
})



// Returns a random integer from 0 to 10:
// Math.floor(Math.random() * 11);
//todo: shaffel btn on click => target.src="song+Math.floor(Math.random() * 6)"";



song1.addEventListener("click" , ()=>
{
    audio.src="./media/1.mp3"
   audio.play()
})

song2.addEventListener("click" , ()=>
{
    audio.src="./media/2.mp4"
   audio.play();
})
song3.addEventListener("click" , ()=>
{
    audio.src="./media/3.mp3"
    audio.play();
})
song4.addEventListener("click" , ()=>
{
    audio.src="./media/4.mp4"
    audio.play();
})
song5.addEventListener("click" , ()=>
{
    audio.src="./media/5.mp4"
   audio.play();
})



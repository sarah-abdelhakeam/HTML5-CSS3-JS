
// var navigator = new  Navigator;

// console.log(navigator);
// console.log(navigator.geolocation);
// console.log(navigator.geolocation.getCurrentPosition)

// navigator.geolocation.getCurrentPosition(function(e){
//     console.log(e);
//     console.log(e.coords);
//     console.log(" latitute = " , e.coords.latitude);
//     console.log(" longitude = " , e.coords.longitude);
// })

var para = document.getElementById("para");
function geolocation()
{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError)
    }
    else{
        para.innerHTML="geo location is not supported in this browser"
    }
}

function showPosition(position)
{
    var lat = position.coords.latitude;
    var long=position.coords.longitude;

    para.innerHTML=" latitiude : "+ lat + "<br> longitude : "+long;
    var url = "http://maps.google.com/maps?q="+lat+","+long
    window.open(url,'_blank')
}
function showError()
{
    
}
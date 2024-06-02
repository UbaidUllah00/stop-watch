var hourHeading =document.getElementById("hour")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById ("sec")
var mSecHeading = document.getElementById ("mSec")
var interval;
// var stop;


 var hour = 10;
 var min = 0;
 var sec = 0;
 var mSec = 0;


//  let disabled = document.getElementById("disabled")/
//   disabled.style.display = "none" ;
  


function start() {
    hour--
    hourHeading.innerHTML = hour

    if(hour < 59){
        min--
        minHeading.innerHTML =min
        hour = 0
    }
    else if(min < 59){
        sec--
        secHeading.innerHTML = sec
        min = 0
    }
    else if(sec === 100 ){
         mSec--
         mSecHeading.innerHTML = mSec
         sec = 0
    }
}

function decWatch(){
    interval = setInterval(start,10)
    // var dis =   document.ElementById("none").disabled = true;/
}

function decStopWatch(){
    clearInterval(interval)

    hourHeading.innerHTML = "10";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    mSecHeading.innerHTML = "00";

    hour = 10;
    min = 0;
    sec = 0;
    mSec = 0;
}

function decResetWatch() {
    clearInterval(interval)
}
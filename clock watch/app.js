

var hourHeading =document.getElementById("hour")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById ("sec")
var mSecHeading = document.getElementById ("mSec")
var interval;
// var stop;


 var hour = 0;
 var min = 0;
 var sec = 0;
 var mSec = 0;


//  let disabled = document.getElementById("disabled")/
//   disabled.style.display = "none" ;
  


function start() {
    mSec++
    mSecHeading.innerHTML = mSec

    if(mSec === 100){
        sec++
        secHeading.innerHTML =sec
        mSec = 0
    }
    else if(sec > 59){
        min++
        minHeading.innerHTML = min
        sec = 0
    }
    else if(min > 59 ){
         hour++
         hourHeading.innerHTML = hour
         min = 0
    }
}

function startWatch(){
    interval = setInterval(start,10)
    // var dis =   document.ElementById("none").disabled = true;/

    


}

function stopWatch(){
    clearInterval(interval)

   
}

function resetWatch() {
    clearInterval(interval)

    hourHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    mSecHeading.innerHTML = "00";

    hour = 0;
    min = 0;
    sec = 0;
    mSec = 0;
}



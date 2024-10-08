var sec = 0;
var min = 0; 
var hour = 0;


var hourval = document.getElementById("hourVal");
var minVal = document.getElementById("minVal");
var secVal = document.getElementById("secVal");

var interval;

function renderVal(){
    hourval.innerHTML = hour;
    minVal.innerHTML = min;
    secVal.innerHTML = sec;
}


function startBtn(){
    sec++;
    if(sec == 60){
        min++;
        sec = 0;
        if(min == 60){
            hour++;
            min = 0
        }
    }
}

function timer(){
    interval = setInterval(function(){
        startBtn();
    }, 1000);
}

function stopBtn(){
    clearInterval(interval);
}

function resetBtn(){
    sec = 0;
    hour = 0;
    min = 0;
    stopBtn();
    renderVal();
}

// var sec = 0;
// var min = 0;
// var hour = 0;

// var secval = document.getElementById("sec");
// var hourval = document.getElementById("hour");
// var minval = document.getElementById("min");
// var interval;

// function renter(){
//     secval.innerHTML = sec;
//     minval.innerHTML = min;
//     hourval.innerHTML = hour;
// }

// function start(){
//     sec++;
// if(sec == 60){
//     min++;
//     sec = 0;
//     if(min == 60){
//  hour++;
//  min = 0; 
//     }

// }
// renter();

// }
// function timer(){
//     interval = setInterval(function(){
//      start();
//     },1000)
// }
// function stop(){
//     // stopbtn.btn.disabled = ture;
//     // startbtn.btn.disabled = false;

// clearInterval(interval);
// }
// function reset(){

//     sec = 0;
//     min = 0;
//     hour = 0;
//     stop();
//     renter();
// }

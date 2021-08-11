const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

var workMinutes = 0;
var workSecs = 59;
var breakMinutes = 0;
var breakSecs = 59;

var playClicked = false;
var pauseClicked = false;
var stopClicked = false;

const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const stopButton = document.querySelector(".stop-restart-button");
var audio = new Audio('sounds/ding.mp3');


stopButton.addEventListener("click",stop_procedure)

workFunc();

function play_procedure(){
    console.log("play button clicked");
        // if(minutes.innerText == "25"){
        //     minutes.innerText = 24;
        // }
        if(playClicked==false){
            playClicked = true;
            pauseClicked = false;
            stopClicked = false;
            // a = setInterval(() => {
            //     if(workMinutes>9){
            //         minutes.innerText = workMinutes;
            //     }
            //     else{
            //         minutes.innerText = "0" + workMinutes;
            //     }
                
            //     workMinutes--;
            //     if(workMinutes==-1) clearInterval(a);
            // }, 60000);

            // b = setInterval(() => {
            //     if(workSecs>9){
            //         seconds.innerText = workSecs;
            //     }
            //     else{
            //         seconds.innerText = "0" + workSecs;
            //     }
                
            //     workSecs--;
            //     if(workSecs==-1 && workMinutes!=-1) workSecs = 59;
            //     if(workSecs==-1 && workMinutes==-1) {
            //         clearInterval(b);
            //         breakfunc();
            //         return;
            //     }
            // }, 1000);

            a = setInterval(()=>{

                if(workMinutes>9){
                    minutes.innerText = workMinutes;
                }
                else{
                    minutes.innerText = "0" + workMinutes;
                }
                if(workSecs>9){
                    seconds.innerText = workSecs;
                }
                else{
                    seconds.innerText = "0" + workSecs;
                }
                
                workSecs--;
                if(workSecs==-1 && workMinutes!=-1) {
                    workSecs = 59;
                    workMinutes--;
                }
                if(workSecs==0 && workMinutes==0) {
                    clearInterval(a);
                    breakFunc();
                    return;
                }
            },1000);
        }
        
}

function pause_procedure(){
    console.log("pause button clicked");
    if(pauseClicked==false){
        playClicked = false;
        pauseClicked = true;
        stopClicked = false;
        clearInterval(a);
        clearInterval(b);
    }
    
}


function stop_procedure(){
    console.log("stop button clicked");
    if(stopClicked==false){
        playClicked = false;
        pauseClicked = false;
        stopClicked = true;
         workMinutes = 24;
        workSecs = 59;
        minutes.innerText = 25;
        seconds.innerText = "00";
        clearInterval(a);
        workFunc();
    }
    
}

function workFunc(){
    playButton.addEventListener("click",play_procedure);
    pauseButton.addEventListener("click",pause_procedure);
}

function breakFunc(){
    audio.play();
    var takeBreak = confirm("Start Break?");
    if(takeBreak){
        playButton.removeEventListener("click",play_procedure);
        pauseButton.removeEventListener("click",pause_procedure);

        b = setInterval(()=>{

            if(breakMinutes>9){
                minutes.innerText = breakMinutes;
            }
            else{
                minutes.innerText = "0" + breakMinutes;
            }
            if(breakSecs>9){
                seconds.innerText = breakSecs;
            }
            else{
                seconds.innerText = "0" + breakSecs;
            }
            
            breakSecs--;
            if(breakSecs==-1 && breakMinutes!=-1) {
                breakSecs = 59;
                breakMinutes--;
            }
            if(breakSecs==0 && breakMinutes==0) {
                audio.play();
                stop_procedure();
                clearInterval(b);
                return;
            }
        },1000);

    }
}
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

var workMinutes = 23;
var workSecs = 59;

var playClicked = false;
var pauseClicked = false;
var stopClicked = false;

const playButton = document.querySelector(".play-button");
const pauseButton = document.querySelector(".pause-button");
const stopButton = document.querySelector(".stop-restart-button");

playButton.addEventListener("click",()=>{
    console.log("play button clicked");
        minutes.innerText = 24;
        if(playClicked==false){
            playClicked = true;
            pauseClicked = false;
            stopClicked = false;
            a = setInterval(() => {
                if(workMinutes>9){
                    minutes.innerText = workMinutes;
                }
                else{
                    minutes.innerText = "0" + workMinutes;
                }
                
                workMinutes--;
                if(workMinutes==-1) clearInterval(a);
            }, 60000);

            b = setInterval(() => {
                if(workSecs>9){
                    seconds.innerText = workSecs;
                }
                else{
                    seconds.innerText = "0" + workSecs;
                }
                
                workSecs--;
                if(workSecs==-1 && workMinutes!=-1) workSecs = 59;
                if(workSecs==-1 && workMinutes==-1) clearInterval(b)
            }, 1000);
        }
        
});

pauseButton.addEventListener("click",function(){
    console.log("pause button clicked");
    if(pauseClicked==false){
        playClicked = false;
        pauseClicked = true;
        stopClicked = false;
        clearInterval(a);
        clearInterval(b);
    }
    
})


stopButton.addEventListener("click",function(){
    console.log("stop button clicked");
    if(stopClicked==false){
        playClicked = false;
        pauseClicked = false;
        stopClicked = true;
        clearInterval(a);
        clearInterval(b);
        var workMinutes = 23;
        var workSecs = 59;
        minutes.innerText = 25;
        seconds.innerText = "00";
    }
    
})




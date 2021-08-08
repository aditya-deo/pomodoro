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
    console.log("clicked");
        minutes.innerText = 24;
        if(playClicked==false){
            playClicked = true;
                var a = setInterval(() => {
                if(workMinutes>9){
                    minutes.innerText = workMinutes;
                }
                else{
                    minutes.innerText = "0" + workMinutes;
                }
                
                workMinutes--;
                if(workMinutes==-1) clearInterval(a);
            }, 60000);

            var b = setInterval(() => {
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




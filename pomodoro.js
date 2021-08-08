// $(".pause-play-button").on("click",function(){
//     console.log("clicked");
//     if($(".pause-play-button")[0].innerHTML === "Start"){
//         $(".pause-play-button")[0].innerHTML = "<h3>Pause</h3>";
//     }
//     else{
//         $(".pause-play-button")[0].innerHTML = "<h3>Start</h3>";
//     }
// })


var ppb = document.getElementsByClassName("pause-play-button")[0];
ppb.addEventListener("click", function(){
    if(document.getElementsByClassName("pause-play-button")[0].innerText === "Start"){
        document.getElementsByClassName("pause-play-button")[0].innerHTML = "<h3>Pause</h3>";
    }
    else{
        document.getElementsByClassName("pause-play-button")[0].innerHTML = "<h3>Start</h3>";
    }
})
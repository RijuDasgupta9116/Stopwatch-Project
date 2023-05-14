/* Initiallizing seconds and miliseconds value with 0*/
var sec = 00;
var milisec = 00;

/* This timer variable is use to check when stopwatch is started or stoped*/
var timer = false;

/* After starting the timer variable is set to true and stopwatch function(the main logic function) is called */
function start(){
    timer = true;
    stopwatch();
}
/* Stop function is use to stop the timer */
function stop(){
    timer = false;
}
/* Reset function is use to reset the timer and display the value 00:00 */
function reset(){
    
    timer = false;
    sec = 0;
    milisec = 0;
    var milisecVal = document.querySelector("#milisec").innerHTML = "00";
    var secVal = document.querySelector("#sec").innerHTML = "00";

}


function stopwatch(){
    if(timer == true){
        milisec += 1;

        
        

        /* After 1000 miliseconds the second value will increases */
        if(milisec >=100){
            sec += 1;
            milisec = 0;
        }


        /* This portion of code is used to set seconds and miliseconds value and fixes a problem
            when the stopwatch starts it displays like 0:0 but we want 00:00 show here
            we convert number value to string to fix the problem
        */
        var milisecStr = milisec
        var secStr = sec;
         
        if(milisec <10){
           milisecStr = "0" + milisecStr;
        }
        if(sec < 10){
            secStr = "0"+secStr;
        }
        document.querySelector("#milisec").innerHTML = milisecStr;
        
        document.querySelector("#sec").innerHTML = secStr;
        

        /*
            1 sec = 1000 milisec.
            So we take set timeout timing as 10 milisec so that inside html the milisec shows from
            0 -> 99
        */
        setTimeout("stopwatch()",10);
    }

}
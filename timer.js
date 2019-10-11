var countdownMinutes = 0.1;

var mins;
var secs;

var initial;

function start(){
    secs = countdownMinutes * 60;
    initial = setInterval('time()', 1000);
}

function restart(){
    if (secs => 0){
        stopRecordingForce();
        clearInterval(initial);
    }
}

function time(){
    if (document.getElementById){
        minutes = document.getElementById("minutes");
        seconds = document.getElementById("seconds");
        
        minutes.value = getMinutes();
        seconds.value = getSeconds();

        secs--;

        if (secs < 0){
            stopRecording();
            clearInterval(initial);
        }

    }
}


function getMinutes(){
    mins = Math.floor (secs/60);
    return mins;
}

function getSeconds(){
    return secs - Math.round(mins*60);
}

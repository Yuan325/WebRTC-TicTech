var countdownMinutes = 0.2;

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
    return pad(mins,2);
}

function getSeconds(){
    secs = secs - Math.round(mins*60);
    return pad(secs,2);
}

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0"+s;
    return s;
}

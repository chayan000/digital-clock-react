import React from 'react'
import "./timer.css";
var flag = 0;
function resetbutton() {
    flag=0;
}
function displaytime() {
    const time = document.getElementById('time').value;

    if (!time) {
        alert("enter the timer time");
        return;
    }
    document.getElementById('showtime').innerHTML = time;
    return false;
}

function starttimer() {
    
    document.getElementById('set');
    let time = document.getElementById('time').value;
    if (!time) {

        alert("please set timer");
        return;
    }
    var Minutesseconds = time.split(":");
    var hours = parseInt(Minutesseconds[0], 10);
    var minutes = Minutesseconds[1] ? parseInt(Minutesseconds[1], 10) : 0;
    var seconds = Minutesseconds[2] ? parseInt(Minutesseconds[2], 10) : 0;
    let looptime = hours + ":" + minutes + ":" + seconds
    const interval = setInterval(() => {
        if (flag != 0) {
            time = looptime;
            Minutesseconds = time.split(":");
            hours = parseInt(Minutesseconds[0], 10);
            minutes = Minutesseconds[1] ? parseInt(Minutesseconds[1], 10) : 0;
            seconds = Minutesseconds[2] ? parseInt(Minutesseconds[2], 10) : 0;
            if (minutes == 0 && seconds == 0 && hours == 0) {
                alert("enter a valid time");
                clearInterval(interval);
                document.location.reload(true)
            }

            if (minutes == 0 && seconds == 1 && hours == 0) {
                alert("attention!!!! timer time out");
                clearInterval(interval);
                document.location.reload(true)
            }
            if (seconds == 0 && minutes != 0) {
                minutes--;
                seconds = 60;
            }

            if (minutes == 0 && seconds == 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
            else {
                seconds--;
            }


            looptime = hours + ":" + minutes + ":" + seconds;
            document.getElementById('showtime').innerHTML = hours + ":" + minutes + ":" + seconds;
        }
        else{
            clearInterval(interval);
            document.location.reload(true)
        }
        
    }, 1000);

}
function checkflag(){
    flag=1;
    starttimer();
}

function timer() {
    return (
        <div className="timer">
            <div className="head">
                <h1>Timer</h1>
            </div>
            <div className="container">
                <div className="taketime">
                    <label id="entertime">Enter Time</label>
                    <br />
                    <input className="inputtime" type="time" id="time" step="1"></input>
                </div>
                <div className="setreset">
                    <button id="set" className="button" onClick={displaytime}>Set</button>
                    <button id="reset" className="button" onClick={resetbutton}>Reset</button>
                </div>
                <h1 className="countdown">Countdown</h1>
                <br />
                <span id="showtime"></span>
                <br />
                <button id="start" className="button" onClick={checkflag}>Start timer</button>
            </div>
        </div>
    );
}
export default timer;
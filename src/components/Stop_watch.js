import React from 'react'
import "./stopwatch.css";
function stop_watch(){
    var interval;
    var last;
    var hours=0;
    var minutes=0;
    var seconds=0;
    var miliseconds=0;
    document.getElementById('time').innerHTML=hours+":"+minutes+":"+seconds+":"+miliseconds
    
    
    
    function starttime(){
        hours=0;
        minutes=0;
        seconds=0;
        miliseconds=0;
        interval=setInterval(startnew,10)
    }

    function startnew(){
        miliseconds++;
        if(miliseconds==100){
            seconds++;
            miliseconds=0;
        }
        if(seconds==60){
            minutes++;
            seconds=0;
        }
        if(minutes==60){
            hours++;
            minutes=0;
        }
        last=hours+":"+minutes+":"+seconds+":"+miliseconds;
        document.getElementById('time2').innerHTML=hours+":"+minutes+":"+seconds+":"+miliseconds;
    }
    
    function stoptime(){
        document.getElementById('last').innerHTML=last;
        clearInterval(interval);
    }
    return(
        <div>
            <div className="stopwatch">
                <h1 className="head">Stop Watch</h1>
                <div className="container">
                    <button className="button" id="set" onClick={starttime}>Start</button>
                    <br />
                    <span id="time2">00:00:00:00</span>
                    <br />
                    <button className="button" id="reset" onClick={stoptime}>Stop</button>
                    <h1 id="lasttime">Last recorded time: <span id="last">00:00:00:00</span></h1>
                </div>
            </div>
        </div>

    );
}
export default stop_watch;
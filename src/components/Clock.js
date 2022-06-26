import "./clock.css";
import "./clockfunction.js";
function clock() {
    return (
        <div className="clock">
            <div className="head">
                <h1>Digital Clock</h1>
            </div>
            <div className="container">
                <div className="timeclass">
                    <h1 className="time">Time</h1>
                    <span id="time1"></span>
                    <div >
                        <span className="ampm" id="am">AM</span>
                        <span className="ampm" id="pm">PM</span>
                    </div>
                </div>
                <div className="dateclass">
                    <h1 className="date">Date</h1>
                    <span id="date"></span>
                    <div className="days">
                        <span className="day" id="sun">SUN</span>
                        <span  className="day" id="mon">MON</span>
                        <span  className="day" id="tue">TUE</span>
                        <span  className="day" id="wed">WED</span>
                        <span  className="day" id="thu">THU</span>
                        <span  className="day" id="fri">FRI</span>
                        <span  className="day" id="sat">SAT</span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default clock;
import React from 'react'
import { Link } from "react-router-dom";
import "./header.css"
function header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Digital Clock</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/timer">Timer</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stopwatch">Stop Watch</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>

    );
}
export default header;
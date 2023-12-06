import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="Home.js"><span className="button"><Link to="/">Home</Link></span></a></li>
                    <li><a href="network.js"><span className="button"><Link to='/network'>Network</Link></span></a></li>
                    <li><a href="Analysis.html"><span className="button"><Link to='/Analysis'>Analysis</Link></span></a></li>
                    <li><a href="method.js"><span className="button"><Link to='/method'>Methods</Link></span></a></li>
                </ul>
                <div className="quotes">
                    <p id="line1"></p>
                </div>
            </nav>
        </>
    );
}


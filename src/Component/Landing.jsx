import React from "react";
import { Link } from "react-router-dom";
import '../style/Landing.css'


export default function Landing() {
    return(
        <div className="landing">
            <h1 className="frase">
                Welcome to the <span className="landing-title">Dogs</span> Api
            </h1>
            <h1 className="frase2">All dogs in one place</h1>

            <Link to = '/home'>
                <div className="box-2">
                    <button className="btn btn-two">Click Here </button>
                </div>
            </Link>
        </div>

    )
}
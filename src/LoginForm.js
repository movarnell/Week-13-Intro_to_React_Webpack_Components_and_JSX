import React from "react";
import './App.css';
import pawPrint from './64431.png';


export default function LoginForm() {
    return (
        <>
            <div className="col"></div>
            <div className="col loginBox shadow">
                <h3 className="titleLogin"><img src={pawPrint} className="rotateLeft" height="40px" width="40px"></img>  Login</h3>
                <input className="lowerLine" type={"text"} id="textBox" placeholder="Username or Email"></input><br /><br />
                <input className="lowerLine" type={"password"} placeholder="Password"></input><br />
                <button className="btn btn-primary m-3">Login</button>
            </div>
            <div className="col"></div>
        </>
    )
}
import { React, useContext, useState } from "react";

function Login(){
    return (
        <div>
            <div className="center ">
                <h1>Manifest</h1>
                <input className = "login-field" type = "email" placeholder='Email' name="email" onChange={(e) => {}}/>
                <input className = "login-field" placeholder='Password' type = "password" name="password" onChange={(e) => {}}/>
                <button className = "login-btn" onClick={() => {}} > Login</button>
            </div>
      </div>
    )
}

export default Login


import { React, useContext, useState } from "react";
import ReactInput from "../common/ReactInput";
import ReactButton from "../common/ReactButton";

const Login = () => {

    const loginBtnOnClick = () => {

    }

    return (
        <div>
            <div className="center ">
                <h1>Library Management System</h1>
                <ReactInput
                    title = 'Username'
                    placeholder = 'BatoolA'
                />
                <ReactInput
                    title = 'Password'
                    placeholder = 'password'
                    type = "password"
                />
                
                <ReactButton
                    btnTitle = 'Login'
                    btnOnClick = {loginBtnOnClick}
                />
            </div>
      </div>
    )
}

export default Login


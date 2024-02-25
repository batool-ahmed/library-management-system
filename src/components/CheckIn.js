import { React, useContext, useState } from "react";
import { checkInFields } from "../Constants";
import { TextField } from "@mui/material";
import ReactButton from "../common/ReactButton";

const CheckIn = () => {
    return (
        <div>
            <div className="center ">
                <h1>Library Management System</h1>
                {checkInFields.map((fieldTitle) => (
                    <TextField
                        id="outlined-required"
                        label={fieldTitle} 
                        defaultValue="Hello World"
                        disabled
                        // fullWidth
                    />
                ))}
            </div>
        </div>
    )
}

export default CheckIn


import { React, useContext, useState } from "react";
import { checkInFields, checkOutFields } from "../Constants";
import { TextField } from "@mui/material";
import ReactButton from "../common/ReactButton";
import ReactInput from "../common/ReactInput";

const CheckOut = () => {
    return (
        <div>
            <div className="center ">
                <h1>Library Management System</h1>
                {checkOutFields.map((field) => (
                    <ReactInput
                        title = {field.title}
                        placeholder = {field.placeholder}
                    />
                ))}
                <ReactButton btnTitle='Submit'/>
            </div>
        </div>
    )
}

export default CheckOut


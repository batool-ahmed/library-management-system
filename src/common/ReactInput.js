import { React, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Radio, TextField } from '@mui/material';

const ReactInput = ({ required = true, disabled = false, type, title, placeholder }) => {
  return (
    <TextField
        required = {required}
        disabled = {disabled}
        type = {type}
        id = "outlined-required"
        label = {title} 
        defaultValue = {placeholder}
    />
  );
};

export default ReactInput;


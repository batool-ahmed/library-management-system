import { React, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Radio } from '@mui/material';

const ReactTable = ({ radioBtnIndex, colTitles, data }) => {
  const [selectedRowIndex, setSelectedRowIndex] = useState(null)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {colTitles.map((title) => (
              <TableCell>{title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
            >
              {row.map((cell, cellIndex) => (
                <TableCell component="th" scope="row" key={cellIndex}>
                  {cellIndex === radioBtnIndex ? 
                      <Radio 
                        checked={rowIndex === selectedRowIndex}   
                        onChange={() => {
                          if (rowIndex !== selectedRowIndex) {
                              setSelectedRowIndex(rowIndex);
                          }
                        }}                      
                      /> : 
                      cell 
                  }
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReactTable;
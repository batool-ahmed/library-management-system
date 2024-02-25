import { React, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Modal, Radio, Typography } from '@mui/material';
import { btnsBelowTable, detailsCategories } from '../Constants';
import ReactButton from '../common/ReactButton';
import { NavLink, useNavigate } from 'react-router-dom';
import Details from './Details';

const ButtonsBelowTable = () => {
    const [showModal, setShowModal] = useState(false)
    // const [showModal, setShowModal] = useState(false);

    const showDetailsModal = () => {
      setShowModal(true);
    };
  
    const hideDetailsModal = () => {
      setShowModal(false);
    };
      
    const navigate = useNavigate()
 
    const onClickCheckIn = () => {
        console.log('checkIn')
        navigate('/check-in'); 
    }

    const onClickCheckOut = () => {
        console.log('checkOut')
        navigate('/check-out'); 
    }

    // const onClickDetails = () => {
    //     // <NavLink to='/details' target='_self'>Details</NavLink>
    //     // navigate('/details'); 
    //     setShowDetailsModal(!showDetailsModal)
    // }


    return (
        <div>
            <div className='btns-below-table'>
                { btnsBelowTable.map((btn) => (
                    <ReactButton 
                        btnTitle = {btn.title} 
                        btnOnClick={() => {
                            if (btn.title == 'Check-In'){
                                onClickCheckIn()
                            } else if (btn.title == 'Check-Out'){
                                onClickCheckOut()
                            } else if (btn.title == 'Details'){
                                showDetailsModal()
                            }
                        }
                        }
                    />
                ))}
            </div>
                {/* <Details isOpen={showModal} handleClose={hideDetailsModal}/> */}
            <Modal
                open={showModal}
                onClose={hideDetailsModal}
                >
                <Box>
                    {detailsCategories.map((category) => (
                        <Typography>{category}</Typography>
                    ))}
                </Box>
            </Modal>
        </div>
    );
};

export default ButtonsBelowTable;
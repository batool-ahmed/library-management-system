import { Box, Modal, Typography } from '@mui/material';
import React from 'react'

const Details = ( { open, handleClose } ) => {
    console.log('in details')
    return (
        <Modal
            open={open}
            onClose={handleClose}
            >
            <Box>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
            </Box>
        </Modal>
  )
}

export default Details;
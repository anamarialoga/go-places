import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import withRoot from '../withRoot';

const style = {
  position: 'absolute',
  top: '50%',
  left: '57%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 750,
  minWidth: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const ReadMore = (props)=>{

    return <>
       <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.open}>
          <Box sx={style}>
            <div className='flex' style={{justifyContent:"space-between"}}>
            <Typography color={"secondary"} id="transition-modal-title" variant="h6" component="h2">
              {props.listing.name}
            </Typography>
            <Button style={{marginBottom:"1rem"}} onClick={props.handleClose}>
                Close
            </Button>
            </div>
            <Typography id="transition-modal-description" sx={{ mt: 2 , maxWidth:"500"}}>
             {props.listing.description}
            </Typography>
          </Box>
        </Fade>
      </Modal> 
    </>
}

export default withRoot(ReadMore)
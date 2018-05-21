
import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

const ConfirmDialog = ({open, handleClose, onClick, title}) => 
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        >
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Do you realy want to delete the {title} item?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Nope
            </Button>
            <Button onClick={onClick} color="primary">
             Yeap
            </Button>
        </DialogActions>
    </Dialog>

export default ConfirmDialog;
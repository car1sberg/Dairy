
import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

const ConfirmDialog = ({open, handleClose, onClick}) => 
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
                Do you realy want to delete it?
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
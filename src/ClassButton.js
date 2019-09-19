import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ThemeProvider, makeStyles} from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import * as emailjs from 'emailjs-com';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  otherClass: {
    padding: theme.spacing(2),
    margin: theme.spacing(.5),
    textAlign: 'left',
    [theme.breakpoints.up('xs')]: {
      width: 50,
      fontSize: 8,
    },
    [theme.breakpoints.up('sm')]: {
      width: 90,
      fontSize: 10,

    },
    [theme.breakpoints.up('md')]: {
      width: 120,
      fontSize: 12,

    },
    [theme.breakpoints.up('lg')]: {
      width: 150,
      fontSize: 14,

    },
  },
}));

const dialogTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️

    MuiDialog: {
      paper: {
        backGroundColor: '#FFFFFF',
      },
      root: {
        border: 1,
        backGroundColor: '#FFFFFF',
      }
    },
  },
});

export default function ClassButton(props){
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

  const state = {
    "to_email": '',
    "day": props.classDay,
    "time": props.classTime,
    "names": '',
  }

  const errors = {
    "email": false,
    "names": false,
  }
  // const theme = useStyles();

  // const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleRegisterClose() {
    // TODO: check if inputs entered
    // setOpen(false);
    // open another dialog box of confirmation 
    if (state["to_email"] === ""){
      errors['email'] = true;
    } else {
      errors['email'] = false;
    }
    if (state["names"] === ""){
      errors['names'] = true;
    } else {
      errors['names'] = false;
    }
    console.log(errors);
    if (errors['email'] === false){
      if (errors['names'] === false){
        console.log("hits");
        sendEmail();
        setOpen(false);
        setOpen2(true);
      }
    } 
  }

  function sendEmail(){
    var templateParams = {
      to_email: state["to_email"],
      day: state["day"],
      time: state["time"],
      names: state["names"]
    }
    emailjs.send('gmail', 'tkc_trial_class_confirmation_email', templateParams, 'user_1WYmp3qjQHUHT8dwIIgyl'   )
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(err) {
       console.log('FAILED...', err);
    });
  }

  function setEmail(val){
    state["to_email"] = val;
  }

  function setNames(val){
    state["names"] = val;
  }

  function handleClickOpen2() {
    setOpen(true);
  }

  function handleClose2() {
    setOpen(false);
  }

  function handleRegisterClose2() {
    // TODO: check if inputs entered
  setOpen2(false);
    // open another dialog box of confirmation 

  }

  return(
    <div>
      <Button onClick={handleClickOpen} disabled = {props.clickable}>
        <Paper className = {classes.otherClass}>
          <Box fontWeight = "fontWeightBold" paddingBottom = {1} > {props.classTime}</Box>
          {props.className}
        </Paper>
      </Button>
      <ThemeProvider theme = {dialogTheme}>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Register</DialogTitle>
          <DialogContent>
            <DialogContentText>
              You have chosen to have the free trial class on <b>{props.classDay}</b> at <b> {props.classTime} </b>. Enter the information below to complete registration. 
            </DialogContentText>
            <TextField
              // autoFocus = "false"
              margin="normal"
              id="email"
              label="Email Address"
              type="email"
              required
              fullWidth
              error = {errors["email"]}
              onChange = {event => setEmail(event.target.value)}
            />
            <TextField
              // autoFocus="false"
              margin="normal"
              id="name"
              label="Name(s) of participant(s)"
              type="text"
              required
              fullWidth
              error = {errors["names"]}
              onChange = {event => setNames(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleRegisterClose} color="primary">
              Register
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2} aria-labelledby="form-dialog-title" >
          <DialogTitle id="form-dialog-title">Registration Complete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Thank you for signing up for the first trial class! You will see a confirmation email in your inbox soon. 
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRegisterClose2} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider >
    </div>
  );
}

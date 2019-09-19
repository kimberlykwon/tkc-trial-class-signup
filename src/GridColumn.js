import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box'
import green from '@material-ui/core/colors/green'
import lightgreen from '@material-ui/core/colors/lightGreen'
import lime from '@material-ui/core/colors/lime'
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { borders } from '@material-ui/system';
import ClassButton from './ClassButton';

const bestClass = green[500]; // #F44336
const recClass = lightgreen[400]; // #E040FB
const lessRecClass = lime[400];

const classTheme = createMuiTheme({

  overrides: {
    // Style sheet name ⚛️

    MuiButton: {
      text: {
        padding: 0,
      },
      root: {
        border: 1,
        borderColor: lessRecClass,
      }
    },
    MuiPaper: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: '#FFFFFF',
      },
    },
  },
});

const bestClassTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      text: {
        padding: 0,
      },
    },
    MuiPaper: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: bestClass,
      },
    },
  },
});

const recClassTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      text: {
        padding: 0,
      },
    },
    MuiPaper: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: recClass,
      },
    },
  },
});

const lessRecClassTheme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      text: {
        padding: 0,
      },
    },
    MuiPaper: {
      // Name of the rule
      root: {
        // Some CSS
        backgroundColor: lessRecClass,
      },
    },
  },
});

const themeMapping = {
  "bestClass" : bestClassTheme,
  "recClass" : recClassTheme,
  "lessRecClass" : lessRecClassTheme,
};

export default function GridPart(props){
  
  return(
    <Grid
      container
      spacing = {1}
      direction="column"
      justify="flex-start"
      alignItems="center"
      >

      <ThemeProvider theme={classTheme}>
          <ThemeProvider theme={bestClassTheme}>
            <ClassButton className = {props.dayOption["classes"][0]} classTime = {props.dayOption[props.dayOption["classes"][0]]["classTime"]}classDay = {props.day}/>
          </ThemeProvider>
          <ThemeProvider theme={bestClassTheme}>
            <ClassButton className = {props.dayOption["classes"][1]} classTime = {props.dayOption[props.dayOption["classes"][1]]["classTime"]}classDay = {props.day}/>
          </ThemeProvider>
            <ClassButton className = {props.dayOption["classes"][2]} classTime = {props.dayOption[props.dayOption["classes"][2]]["classTime"]}classDay = {props.day}/>
          <ThemeProvider theme={recClassTheme}>
            <ClassButton className = {props.dayOption["classes"][3]} classTime = {props.dayOption[props.dayOption["classes"][3]]["classTime"]}classDay = {props.day}/>
          </ThemeProvider>
          <ThemeProvider theme={lessRecClassTheme}>
            <ClassButton className = {props.dayOption["classes"][4]} classTime = {props.dayOption[props.dayOption["classes"][4]]["classTime"]}classDay = {props.day}/>
          </ThemeProvider>
      </ThemeProvider>
    </Grid> 
  );
}

import React from 'react';
import ScheduleGrid from './ScheduleGrid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';


// const useStyles = makeStyles({
//   root: {
//     maxWidth: 400,
//     flexGrow: 1,
//   },
// });

// do date calculation here

/*
figure out date data here
*/
function getThisWeek(){
  // const todayTime = new Date.now(); // time
  const todayDay = new Date().getDay();
  const todayDate = new Date().getDate();

  const daysOfTheWeek = ["Mon", "Tues", "Wed", "Thurs"];
  const fullDaysOutput = [];

  // if today's date is in the middle of the week, get dates before and after and calculate next week
  // TODO: figure out edge cases
  if (todayDay >= 0 && todayDay <= 4){
    for (var i = 0; i < 4; i++){
      const offset = todayDay - i - 1;
      fullDaysOutput[i] = daysOfTheWeek[i] + " " + (new Date().getMonth() + 1) + "/" + (new Date().getDate()-offset);
    }
  }

  return fullDaysOutput;

  // if today's date is after thursday, calculate for next two weeks
}

const weekSteps =[
  {
    label: getThisWeek(),
  },
  {
    label: ["Mon 9/23", "Tues 9/24", "Wed 9/25", "Thurs 9/26"],
  }
]


export default function WeekView(props){
  const weekOutput = getThisWeek();

  // const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <div>
      {/* <MobileStepper
        // variant="dots"
        steps={2}
        position="static"
        activeStep={activeStep}
        // className={classes.root} */}
        {/* nextButton={ */}

        {/* } */}
        {/* backButton={ */}
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Prev Week
          </Button>
          <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
            Next Week
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>

        {/* } */}
      {/* /> */}
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {weekSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) < 2 ? (
              <ScheduleGrid weekOutput = {step.label} type= {props.version}/>
            ) : null}
          </div>
        ))}
      </SwipeableViews>


    </div>
);
}
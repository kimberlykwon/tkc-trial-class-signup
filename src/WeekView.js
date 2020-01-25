import React from 'react';
import ScheduleGrid from './ScheduleGrid';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

function getThisWeek(){
  let curr = new Date();
  let weekDayNames = ["Mon", "Tues", "Wed", "Thurs"];
  let week = [];
  
  let nextWeekCurr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate()+7);

  for (let i = 1; i <= 4; i++) {
    let first = curr.getDate() - curr.getDay() + i;
  
    let day = new Date(curr.setDate(first));
    console.log(day.getMonth());
    if (day.getMonth()<10){
      day = day.toISOString().slice(6, 10).replace("-", "/");
    } else {
      day = day.toISOString().slice(5, 10).replace("-", "/");
    }
    week.push(weekDayNames[i-1]+ " " + day);
  }

  for (let i = 1; i <= 4; i++) {
    let first = nextWeekCurr.getDate() - nextWeekCurr.getDay() + i;
    let day = new Date(nextWeekCurr.setDate(first));

    if (day.getMonth()<10){
      day = day.toISOString().slice(6, 10).replace("-", "/");
    } else {
      day = day.toISOString().slice(5, 10).replace("-", "/");
    }
    week.push(weekDayNames[i-1]+ " " + day);
  }

  return week;
}


const weekSteps =[
  {
    label: getThisWeek().splice(0,4),
  },
  {
    label: getThisWeek().splice(4),
  }
]


export default function WeekView(props){
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
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        Prev Week
      </Button>
      <Button size="small" onClick={handleNext} disabled={activeStep === 1}>
        Next Week
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </Button>
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
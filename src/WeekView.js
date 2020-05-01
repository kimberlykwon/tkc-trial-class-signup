import React from 'react';
import ScheduleGrid from './ScheduleGrid';
import { useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';

function getThisWeek(){
  let curr = new Date();
  if ((curr.getDay() === 4 && curr.getHours() >= 20) || curr.getDay() > 4){
    curr = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate()+7);
  }

  let weekDayNames = ["Mon", "Tues", "Wed", "Thurs"];
  let weeks = {
    "week1": [],
    "week2": []
  };

  let sunday = 0;
  if (curr.getDay() === 0){
    sunday = curr.getDate();
  } else {
    sunday = curr.getDate()-curr.getDay();
  }

  // for each day of the week
  for (let i = 1; i <= 4; i++) {
    // find date corresponding to i
    let first = sunday + i;

    // set month and date
    var tempCurr = new Date();
    tempCurr.setDate(first);
    tempCurr.setMonth(curr.getMonth());

    weeks["week1"].push(weekDayNames[i-1]+ " " + stringifyDate(tempCurr));
    weeks["week2"].push(weekDayNames[i-1]+ " " + stringifyDate(tempCurr.setDate(tempCurr.getDate()+7)));
  }

  return weeks;
}

function stringifyDate(date){
  var dt = new Date(date);

  // server based in ohio so alter timezone
  dt.setHours(dt.getHours() - 1);
  if(dt.getMonth() < 10 && dt.getDate() < 10){
    dt = dt.toLocaleString().slice(0, 3);
  }
  else if (dt.getMonth() <10){
    dt = dt.toLocaleString().slice(0, 4);
  } else {
    dt = dt.toLocaleString().slice(0, 5);
  }
  return dt;
}

const weekSteps =[
  {
    label: getThisWeek()["week1"],
  },
  {
    label: getThisWeek()["week2"],
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
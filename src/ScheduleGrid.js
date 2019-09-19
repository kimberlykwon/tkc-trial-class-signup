import React from 'react';
import Columns from 'react-columns';
import GridColumn from './GridColumn';




/*
class lists for two options (m,w/t,th)
*/
const optionMW = {
  "classes": ["Kids Taekwondo Class", "Basic Class", "Advanced/ Black Belt Class", "Family Class/ Black Belt Class", "Family Class"],
  "Kids Taekwondo Class" : {
    "classType": "bestClass",
    "classTime": "3:50 - 4:20pm"
  },
  "Basic Class" : {
    "classType": "bestClass",
    "classTime": "4:20 - 5:00pm"
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "5:10 - 5:50pm"
  },
  "Family Class/ Black Belt Class": {
    "classType": "recClass",
    "classTime": "6:10 - 6:50pm"
  },
  "Family Class": {
    "classType": "lessRecClass",
    "classTime": "7:10 - 7:50pm"
  }
}

const optionTTh = {
  classes: ["Kids Taekwondo Class",  "Advanced/ Black Belt Class", "Basic Class", "Demo Class", "Family Class/ Black Belt Class"],
  "Kids Taekwondo Class" : {
    "classType": "bestClass",
    "classTime": "3:50 - 4:20pm"
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "4:20 - 5:00pm"
  },
  "Basic Class" : {
    "classType": "bestClass",
    "classTime": "5:10 - 5:50pm",
  },
  "Demo Class": {
    "classType": "noRecClass",
    "classTime": "6:10 - 6:50pm"
  },
  "Family Class/ Black Belt Class": {
    "classType": "lessRecClass",
    "classTime": "7:10 - 7:50pm"
  }
}

// const kidClass = "Kids Taekwondo Class";
// const basicClass = "Basic Class";
// const advancedClass = "Advanced/ Black Belt Class";
// const familyBBClass = "Family Class/ Black Belt Class";
// const familyClass = "Family Class";

// const kidClassTime = "3:50 - 4:20pm";
// const basicClassTime = "4:20 - 5:00pm";
// const advancedClassTime = "5:10 - 5:50pm";
// const familyBBClassTime = "6:10 - 6:50pm";
// const familyClassTime = "7:10 - :50pm";

export default function ScheduleGrid(props){
  // const weekOutput = getThisWeek();
  // console.log(weekOutput);

  return (
  <Columns columns="4">
    <div >  
    <p>{props.weekOutput[0]}</p>
     <GridColumn dayOption = {optionMW} day = {props.weekOutput[0]}/>
     </div>
     <div style = {{paddingBottom: 20}}>
     <p>{props.weekOutput[1]}</p>

     <GridColumn dayOption = {optionTTh} day = {props.weekOutput[1]}/>
     </div>
     <div style = {{paddingBottom: 20}}>
     <p>{props.weekOutput[2]}</p>

     <GridColumn dayOption = {optionMW} day = {props.weekOutput[2]}/>
     </div>
     <div style = {{paddingBottom: 20}}>
     <p>{props.weekOutput[3]}</p>

     <GridColumn dayOption = {optionTTh} day = {props.weekOutput[3]}/>
     </div>
  </Columns>
);
}
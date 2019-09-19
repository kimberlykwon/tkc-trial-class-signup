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
    "classTime": "3:50 - 4:20pm",
    "disabled":  false,
  },
  "Basic Class" : {
    "classType": "bestClass",
    "classTime": "4:20 - 5:00pm",
    "disabled":  false,
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "5:10 - 5:50pm",
    "disabled":  true,
  },
  "Family Class/ Black Belt Class": {
    "classType": "recClass",
    "classTime": "6:10 - 6:50pm",
    "disabled":  false,
  },
  "Family Class": {
    "classType": "lessRecClass",
    "classTime": "7:10 - 7:50pm",
    "disabled":  false,
  }
}

const optionTTh = {
  "classes": ["Kids Taekwondo Class",  "Advanced/ Black Belt Class", "Basic Class", "Demo Class", "Family Class/ Black Belt Class"],
  "Kids Taekwondo Class" : {
    "classType": "bestClass",
    "classTime": "3:50 - 4:20pm",
    "disabled": false,
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "4:20 - 5:00pm",
    "disabled":  true,
  },
  "Basic Class" : {
    "classType": "bestClass",
    "classTime": "5:10 - 5:50pm",
    "disabled":  false,
  },
  "Demo Class": {
    "classType": "noRecClass",
    "classTime": "6:10 - 6:50pm",
    "disabled":  true,
  },
  "Family Class/ Black Belt Class": {
    "classType": "lessRecClass",
    "classTime": "7:10 - 7:50pm",
    "disabled":  false,
  }
}


const optionMWAdult = {
  "classes": ["Empty Class", "Kids Taekwondo Class", "Basic Class", "Advanced/ Black Belt Class", "Family Class/ Black Belt Class", "Family Class"],
 
  "Empty Class" : {
    "classType": "noClass",
    "classTime": "11:10 - 11:50am",
    "disabled":  true,
  },
  "Kids Taekwondo Class" : {
    "classType": "noRecClass",
    "classTime": "3:50 - 4:20pm",
    "disabled":  true,
  },
  "Basic Class" : {
    "classType": "noRecClass",
    "classTime": "4:20 - 5:00pm",
    "disabled":  true,
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "5:10 - 5:50pm",
    "disabled":  true,
  },
  "Family Class/ Black Belt Class": {
    "classType": "recClass",
    "classTime": "6:10 - 6:50pm",
    "disabled":  false,
  },
  "Family Class": {
    "classType": "bestClass",
    "classTime": "7:10 - 7:50pm",
    "disabled":  false,
  }
}

const optionTThAdult = {
  "classes": ["Family Class","Kids Taekwondo Class",  "Advanced/ Black Belt Class", "Basic Class", "Demo Class", "Family Class/ Black Belt Class"],
  "Family Class" : {
    "classType": "bestClass",
    "classTime": "11:10 - 11:50am",
    "disabled": false,
  },
  "Kids Taekwondo Class" : {
    "classType": "noRecClass",
    "classTime": "3:50 - 4:20pm",
    "disabled": true,
  },
  "Advanced/ Black Belt Class": {
    "classType": "noRecClass",
    "classTime": "4:20 - 5:00pm",
    "disabled":  true,
  },
  "Basic Class" : {
    "classType": "noRecClass",
    "classTime": "5:10 - 5:50pm",
    "disabled": true,
  },
  "Demo Class": {
    "classType": "noRecClass",
    "classTime": "6:10 - 6:50pm",
    "disabled":  true,
  },
  "Family Class/ Black Belt Class": {
    "classType": "bestClass",
    "classTime": "7:10 - 7:50pm",
    "disabled":  false,
  }
}

const optionMapping = {
  "kids" : [optionMW, optionTTh],
  "adults" : [optionMWAdult, optionTThAdult]
}

export default function ScheduleGrid(props){
  return (
  <Columns columns="4">
    <div style = {{padding:10}}>  
      <p style = {{margin:5}}>{props.weekOutput[0]}</p>
      <GridColumn dayOption = {optionMapping[props.type][0]} day = {props.weekOutput[0]}/>
    </div>

    <div style = {{padding:10}}>  
      <p style = {{margin:5}}>{props.weekOutput[1]}</p>
      <GridColumn dayOption = {optionMapping[props.type][1]} day = {props.weekOutput[1]}/>
    </div>

    <div style = {{padding:10}}>  
      <p style = {{margin:5}}>{props.weekOutput[2]}</p>
      <GridColumn dayOption = {optionMapping[props.type][0]} day = {props.weekOutput[2]}/>
    </div>

    <div style = {{padding:10}}>  
      <p style = {{margin:5}}>{props.weekOutput[3]}</p>
      <GridColumn dayOption = {optionMapping[props.type][1]} day = {props.weekOutput[3]}/>
     </div>
  </Columns>
);
}
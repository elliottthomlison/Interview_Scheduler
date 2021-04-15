import React from "react";
import classnames from "classnames";
import "components/InterviewerListItem.scss";

export default function InterviewerListItem(props) {

  const interviewer = classnames("day-interviewers__item", {
    "interviewers__item--selected": props.selected
  })

  return (
    <li className={interviewer} onClick={() => props.setInterviewer(props.name)}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
    />
    {props.selected ? props.name : ''}
  </li>
  );
}

{/* <DayList days={days} day={day} setDay={setDay} /> */}

// Our DayList component will take in three props.

// days:Array a list of day objects (each object includes an id, name, and spots)
// day:String the currently selected day
// setDay:Function accepts the name of the day eg. "Monday", "Tuesday"
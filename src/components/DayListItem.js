import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

// day-list__item all the time
// day-list__item--selected class name if props.selected is true
// day-list__item--full class name if props.spots is 0.
  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  })

//when there are 0 spots available
  const formatSpots = function() {
    if (props.spots === 0) {
      return "no spots remaining";
    }
//when there is 1 spot available
    if (props.spots === 1) {
      return "1 spot remaining";
    }
//when there are more than 2 spots available 

    return props.spots + " spots remaining"; // spots stored here. value should change when appt. created or deleted
  };
  
  //li represents the entire day item
  //h2 should display day name
  //h3 should display the spots remaining for a day
  return (
    <li data-testid="day" className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
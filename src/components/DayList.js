import React from "react";

import DayListItem from "components/DayListItem";

  export default function DayList(props) {
      // Build an array of day list items and render

    const days = props.days.map(day => {
      return (
        <DayListItem 
          key={day.name}
          name={day.name} 
          spots={day.spots} 
          selected={day.name === props.selectedDay}
          setDay={props.setDay}  
        />
      )
    }) 
    return (
      <ul>{days}</ul>
    )
  }
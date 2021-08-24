import React from "react";
import Tasks from "./Tasks";
function Task(props) {
  return (
    <div>
      {props.task.map((val, index) => (
        <Tasks key={val.id} text={val.text} day={val.day} id={val.id} delete={props.delete} reminder={props.reminder} remainderState={val.reminder} />
      ))}
    </div>
  );
}

export default Task;

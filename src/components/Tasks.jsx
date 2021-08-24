import React from "react";
import { FaTimes } from "react-icons/fa";

function Tasks(props) {
  //   function handelClick() {
  //     props.delete(props.id);
  //   }
  return (
    <div
      className={`task ${props.remainderState ? "reminder" : ""}`}
      onDoubleClick={() => {
        props.reminder(props.id);
      }}
    >
      <h3>
        {props.text}{" "}
        <FaTimes
          onClick={() => {
            props.delete(props.id);
          }}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{props.day}</p>
    </div>
  );
}

export default Tasks;

import React from "react";
import Button from "./Button";
const Header = (props) => {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <Button
        text={props.stateStatus ? "Close" : "Add"}
        onClick={() => {
          props.addCheck();
        }}
      />
    </div>
  );
};

Header.defaultProps = {
  title: "Task Manager",
};

export default Header;

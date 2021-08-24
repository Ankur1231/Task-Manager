import React from "react";

function AddTask(props) {
  const [text, settext] = React.useState("");
  const [day, setDay] = React.useState("");
  const [reminder, setReminder] = React.useState(false);

  return (
    <form className="add-form">
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          value={text}
          onChange={(event) => {
            settext(event.target.value);
          }}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          value={day}
          onChange={(event) => {
            setDay(event.target.value);
          }}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(event) => {
            setReminder(event.currentTarget.checked);
          }}
        />
      </div>
      <button
        type="submit"
        className="btn btn-block "
        onClick={(event) => {
          event.preventDefault();
          if (!text) {
            alert("ADD TEXT");
          } else {
            const id = Math.floor(Math.random() * 100);
            props.task({ text, day, reminder, id });
            settext("");
            setDay("");
            setReminder(false);
          }
        }}
      >
        Save Task
      </button>
    </form>
  );
}

export default AddTask;

import React from "react";
import Header from "./components/Header";
import Task from "./components/Task";
import AddTask from "./components/AddTask";
import axios from "axios";

function App() {
  const [data, setData] = React.useState([]);
  const [term, setTerm] = React.useState("");
  const URL = `http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=68b54f571095cde2f39b750c4b27bcb3&units=metric#`;
  const getDataUsingAxios = async () => {
    const response = await axios.get(URL);
    setData(response.data);
  };
  React.useEffect(() => {
    getDataUsingAxios();
  }, []);

  const [state, setState] = React.useState(false);
  const [task, settask] = React.useState([
    {
      id: 1,
      text: "Doctor appointment",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Cllg work ",
      day: "Feb 6th at 1:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Gaming with the boys",
      day: "Feb 7th at 3:30pm",
      reminder: false,
    },
  ]);

  //delete task
  function deleteTask(id) {
    // console.log("delete", id);
    settask(task.filter((val) => val.id !== id));
  }

  //toggle remainder
  function toggleReminder(id) {
    settask(
      task.map((val) => {
        return val.id === id ? { ...val, reminder: !val.reminder } : val;
      })
    );
  }

  //adding tasks
  function addTask(tasks) {
    const newTask = { ...tasks };
    settask([...task, newTask]);
  }

  function checkTrue() {
    setState(!state);
  }
  return (
    <div className="container">
      <Header addCheck={checkTrue} stateStatus={state} />
      {state && <AddTask task={addTask} />}

      {task.length > 0 ? (
        <Task task={task} delete={deleteTask} reminder={toggleReminder} />
      ) : (
        "no task to show"
      )}
      {/* <div>
        <h1>{data.name}</h1>
        <h1>{data.main && data.main.temp}</h1>
        <h1>{data.weather && data.weather[0].description}</h1>
        <button
          onClick={() => {
            console.log(data);
          }}
        >
          log data in console
        </button> */}
      {/* </div> */}
    </div>
  );
}

export default App;

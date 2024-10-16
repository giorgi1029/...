import React, { useState } from "react";
import Card from "./components/card/Card";
import Counter from "./components/count/Count";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, input]);
      setInput("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className={`app ${isDark ? "dark" : "light"}`}>
      {" "}
      {/*აქ მოკლედ ჩატ ჯბტ გავაკეტე ეს isDark არ ვიცოდი მემგონი გაკვეთილზე ვაკეტებდიტ და არ იმუშავა */}
      <button className="theme-button" onClick={toggleTheme}>
        {isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="Add a task..."
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="components-container">
        <Counter />
        <Card
          title=":)"
          image="https://via.placeholder.com/300"
          description="wazzap"
        />
      </div>
    </div>
  );
};

export default App;

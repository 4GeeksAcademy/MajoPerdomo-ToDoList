import React, { useState } from "react";

const TodoList = () => {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [placeholder, setPlaceholder] = useState("Qué tenemos pendiente?");
  const [taskHover, setTaskHover] = useState(null);

  const addTask = () => {
    if (newTask.trim()) {
      setTaskList([...taskList, newTask]);
      setNewTask("");
      setPlaceholder("Qué tenemos pendiente?");
    }
  };

  const deleteTask = (index) => {
    setTaskList((currentTasks) =>
      currentTasks.filter((_, i) => i !== index)
    );
  };

  const showDelete = (index) => {
    setTaskHover(index);
  };

  const hideDelete = () => {
    setTaskHover(null);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
      event.target.value = "";
    }
  };

  return (
    <div className="todo-wrapper">
      <h3 className="todo-title">ToDos</h3>
      
      <div className="todo-container">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="todo-input"
              placeholder={placeholder}
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <ul className="todo-list">
              {taskList.map((task, index) => (
                <li
                  className="todo-item"
                  key={index}
                  onMouseEnter={() => showDelete(index)}
                  onMouseLeave={hideDelete}
                >
                  <span className="task-text">{task}</span>
                  {taskHover === index && (
                    <span 
                      className="delete-button"
                      onClick={() => deleteTask(index)}
                    >
                      ✕
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </form>

        <div className="todo-counter">
          {taskList.length} Cosas pendientes
        </div>
      </div>
    </div>
  );
};

export default TodoList;
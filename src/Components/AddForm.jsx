import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addNewTask } from "../Redux/taskSlice";
const AddForm = () => {
  const dispatch = useDispatch();
  const [title, setTaskName] = useState("");
  const [description, setDesc] = useState("");
  const [status, setStatus] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addNewTask(newTask));
    setTaskName("");
    setDesc("");
    setStatus("");
  };
  return (
    <div>
      <h1>Add New Task</h1>
      <form onSubmit={addTask}>
        <input
          value={title}
          type="text"
          placeholder="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <textarea
          value={description}
          placeholder="Task Description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddForm;

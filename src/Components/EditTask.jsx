import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../Redux/taskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();
  const [title, setTaskName] = useState(task.title);
  const [description, setDesc] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const handleEdit = () => {
    dispatch(updateTask({ id: task.id, title, description, status }));
    setIsEdit(false);
  };
  return (
    <div>
      {isEdit ? (
        <div className="editSection">
          <form>
            <button onClick={() => setIsEdit(!isEdit)}>Close</button>
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
            <button type="submit" onClick={() => setIsEdit(!isEdit)}>
              Cancel
            </button>
            <button type="submit" onClick={handleEdit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsEdit(!isEdit)}>Edit</button>
      )}
    </div>
  );
};

export default EditTask;

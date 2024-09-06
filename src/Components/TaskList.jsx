import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodo, deleteTask } from "../Redux/taskSlice";
import EditTask from "./EditTask";
const TaskList = () => {
  const { tasks, loading, error } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <div>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
                <p>Priority : {task.status}</p>
              </div>
              <div>
                <EditTask task={task} />
                <button onClick={() => handleDelete(task.id)}>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TaskList;

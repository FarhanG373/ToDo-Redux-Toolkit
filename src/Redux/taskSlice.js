import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loading: false,
  error: null,
  status: "All",
};

export const fetchTodo = createAsyncThunk("task/fetchTodos", async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`
  );
  const data = await res.json();
  return data.map((tasks) => {
    return {
      id: tasks.id,
      title: tasks.title,
      description: "",
      status: tasks.completed ? "Completed" : "to do",
    };
  });
});

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addNewTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id ? action.payload : task;
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export const { addNewTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;

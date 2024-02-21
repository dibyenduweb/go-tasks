import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Remove Button",
      description: "test", 
      date: "2024-03-04",
      assignedTo: "dibyendu",
      priority: "high",
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...payload });
      } else {
        const lastElement = state.tasks[state.tasks.length - 1]; // Fix accessing last element
        state.tasks.push({ id: lastElement.id + 1, status: "pending", ...payload });
      }
    },
    removeTask: (state, { payload }) => {
      state.tasks = state.tasks.filter((item) => item.id !== payload); // Fix condition
    },
    updateStatus: (state, { payload }) => {
      const target = state.tasks.find((item) => item.id === payload.id); // Fix typo in property name
      if (target) {
        target.status = payload.status;
      }
    },
  },
});

export const { addTask, updateStatus, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import taskReducer from "./sclise"

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import CarReducer from "../features/custom/CarSlice";

export const store = configureStore({
  reducer: {
		car: CarReducer,
  },
});

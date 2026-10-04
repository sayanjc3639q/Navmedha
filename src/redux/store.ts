import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "./slices/submissionSlice";

export const store = configureStore({
  reducer: {
    submission: submissionReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

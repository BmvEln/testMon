import { configureStore } from "@reduxjs/toolkit";
import testsReducer from "./slices/testsSlice.tsx";
import sitesReducer from "./slices/sitesSlice.tsx";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    tests: testsReducer,
    sites: sitesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TestPT } from "../../types.ts";

const initialState: { tests: TestPT[] } = {
  tests: [],
};

export const testsSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    setTests: (state, action: PayloadAction<TestPT[]>) => {
      state.tests = action.payload;
    },
  },
});

export const { setTests } = testsSlice.actions;
export default testsSlice.reducer;

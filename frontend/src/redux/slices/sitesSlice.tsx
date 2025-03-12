import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Site } from "../../types.ts";

const initialState: { sites: Site[] } = {
  sites: [],
};

export const sitesSlice = createSlice({
  name: "sites",
  initialState,
  reducers: {
    setSites: (state, action: PayloadAction<Site[]>) => {
      state.sites = action.payload;
    },
  },
});

export const { setSites } = sitesSlice.actions;
export default sitesSlice.reducer;

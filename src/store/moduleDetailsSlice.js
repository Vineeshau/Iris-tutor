import { createSlice } from "@reduxjs/toolkit";

const moduleDetailsSlice = createSlice({
  name: "moduleDetails",
  initialState: {
    moduleData: null,
  },
  reducers: {
    setModuleData: (state, action) => {
      state.moduleData = action.payload;
    },
  },
});

export const { setModuleData } = moduleDetailsSlice.actions;

export default moduleDetailsSlice.reducer;

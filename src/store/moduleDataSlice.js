import { createSlice } from "@reduxjs/toolkit";

const moduleDataSlice = createSlice({
  name: "moduleData",
  initialState: {
    modules: [],
  },
  reducers: {
    setModules: (state, action) => {
      state.modules = action.payload;
    },
    addModule: (state, action) => {
      state.modules.push(action.payload);
    },
  },
});

export const { setModules, addModule } = moduleDataSlice.actions;
export default moduleDataSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedCourses: [],
  isDialogOpen: false,
  activeButton: "first",
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setStoredCourses(state, action) {
      state.storedCourses = action.payload;
    },
    toggleDialog(state) {
      state.isDialogOpen = !state.isDialogOpen;
    },
    setActiveButton(state, action) {
      state.activeButton = action.payload;
    },
    publishCourse(state, action) {
      const index = action.payload;
      state.storedCourses[index].publish = true;
    },
  },
});

export const {
  setStoredCourses,
  toggleDialog,
  setActiveButton,
  publishCourse,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;

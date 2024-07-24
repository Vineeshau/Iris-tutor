import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storedCourses: [],
  isDialogOpen: false,
  activeTab: "published",
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setStoredCourses(state, action) {
      state.storedCourses = action.payload;
    },
    toggleDialog(state) {
      state.isDialogOpen = !state.isDialogOpen;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
  },
});

export const { setStoredCourses, toggleDialog, setActiveTab } =
  coursesSlice.actions;

export default coursesSlice.reducer;

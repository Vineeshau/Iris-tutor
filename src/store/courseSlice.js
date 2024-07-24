// features/courseSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showAlert: false,
  courses: [],
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setShowAlert: (state, action) => {
      state.showAlert = action.payload;
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    resetCourses: (state) => {
      state.courses = [];
    },
  },
});

export const { setShowAlert, addCourse, resetCourses } = courseSlice.actions;

export default courseSlice.reducer;

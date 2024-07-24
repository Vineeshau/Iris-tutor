import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "@/store/dashboardSlice";
import coursesReducer from "@/store/coursesSlice";
import moduleDataReducer from "@/store/moduleDataSlice";
import moduleDetailsReducer from "@/store/moduleDetailsSlice";

export const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    courses: coursesReducer,
    moduleData: moduleDataReducer,
    moduleDetails: moduleDetailsReducer,
  },
});

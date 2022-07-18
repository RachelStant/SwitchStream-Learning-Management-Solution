import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/studentSlice";
import activityReducer from "../features/activitySlice";


const store = configureStore({
    reducer: {
        students: studentReducer,
        activities: activityReducer
    }
})
    

export default store;
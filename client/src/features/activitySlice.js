import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../api/index.js'

const initialState = {
    singleSWActivity: false,
    studentID: '',
    saveActivityPending: false,
    saveActivityError: ''
    
}



export const saveNewActivity = createAsyncThunk('activity/saveNewActivity', 
    async (newActivity) => {
        // console.log(newActivity)
        const { studentID } = newActivity
        const { data } = await api.createActivity(studentID, newActivity)
        return data
    }
)



const activitySlice = createSlice({
    name: 'activity',
    initialState,
    reducers: {
        setSingleSWActivity: (state, action) => {

            state.singleSWActivity = !state.singleSWActivity
            state.studentID = action.payload
        }
    },
    extraReducers: {
        //SAVE
        [saveNewActivity.pending]: (state, action) => {
            return {
            ...state,
            saveNewActivityPending: true
            }
        },
        [saveNewActivity.fulfilled]: (state, action) => {
            return {
                ...state,
                saveNewActivityPending: false
            }
        },
        [saveNewActivity.rejected]: (state, action) => {
            return {
                ...state,
                saveNewActivityPending: false,
                saveActivityError: action.error.message
            }
        }
    }
})



export default activitySlice.reducer;

export const { setSingleSWActivity } = activitySlice.actions

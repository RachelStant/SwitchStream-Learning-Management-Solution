import { FormatLineSpacingSharp } from '@mui/icons-material';
import { create } from '@mui/material/styles/createTransitions';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from '../api';

const initialState = {
    students: [],
    addStudError: '',
    addStudLoading: false,
    getStudLoading: false,
    getStudError: '',
    updateStudLoading: false,
    updateStudError: '',
    deleteStudLoading: false,
    deleteStudError: ''
}


export const addStudents = createAsyncThunk('students/addStudent',
    async (newStudent) => {
        const { data } = await api.addStudent(newStudent)
        return data
    }
)

export const getStudents = createAsyncThunk('students/getStudents',
    async () => {
        const { data } = await api.fetchStudents()
        return data
    }
) 

export const updateStudent = createAsyncThunk('students/updateStudent', 
    async (newStudent) => {
        const { _id } = newStudent
        const { data } = await api.updateStudent(_id, newStudent)
        return data
    }
)

export const deleteStudent = createAsyncThunk('students/deleteStudent',
    async (id) => {
        const { data } = await api.deleteStudent(id)
        console.log(data)
        return data
    }
)




 const studentSlice = createSlice({
    name:'students',
    initialState,
    
    extraReducers: {
        //ADD
        [addStudents.pending]: (state, action) => {
            return {
                ...state,
                addStudLoading: true,

            }
        },
        [addStudents.fulfilled]: (state, action) => {
            return {
                ...state,
                addStudLoading: false,
                students: [...state.students, action.payload]
            }
        },
        [addStudents.rejected]: (state, action) => {
            return {
                ...state,
                addStudLoading: false,
                students: [],
                addStudError: action.error.message
            }
        },
        //FETCH
        [getStudents.pending]: (state, action) => {
            return {
                ...state,
                getStudLoading: true
            }
        },
        [getStudents.fulfilled]: (state, action) => {
            return {
                ...state,
                getStudLoading: false,
                students: action.payload
            }
        },
        [getStudents.rejected]: (state, action) => {
            return {
                ...state,
                getStudLoading: false,
                students: [],
                getStudError: action.error.message
            }
        },
        //UPDATE
        [updateStudent.pending]: (state, action) => {
            return {
                ...state,
                updateStudLoading: true
            }
        },
        [updateStudent.fulfilled]: (state, action) => {
            const updatedStudents = state.students.map((stud) => stud._id === action.payload._id ? action.payload : stud)

            return {
                ...state,
                students: updatedStudents,
                updateStudLoading: false
            }
        },
        [updateStudent.rejected]: (state, action) => {
            return {
                ...state,
                students: [],
                updateStudError: action.error.message
            }
        },
        //DELETE
        [deleteStudent.pending]: (state, action) => {
            return {
                ...state,
                deleteStudLoading: true
            }
        },
        [deleteStudent.fulfilled]: (state, action) => {

            const updatedStudents = state.students.filter((stud) => stud._id !== action.payload._id)

            return {
                ...state,
                deleteStudLoading: false,
                students: updatedStudents
            }
        },
        [deleteStudent.rejected]: (state, action) => {
            return {
                ...state,
                students: [],
                deleteStudLoading: false,
                deleteStudError: action.error.message
            }
        }
    }
})



export default studentSlice.reducer





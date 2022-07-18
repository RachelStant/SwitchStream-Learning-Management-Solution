import axios from 'axios';

// Students
const url = 'http://localhost:5001/students'

export const addStudent = (newStudent) => axios.post(url, newStudent)
export const fetchStudents = () => axios.get(url)
export const getStudentById = (id) => axios.get(`${url}/${id}`)
export const updateStudent = (id, newStudent) => axios.patch(`${url}/${id}`, newStudent)
export const deleteStudent = (id) => axios.delete(`${url}/${id}`)

// Activities

const urlActivity = 'http://localhost:5001/activity'

export const createActivity = (studId, newActivity) => axios.post(`${urlActivity}/${studId}`, newActivity)
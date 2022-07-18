import express from 'express';
import { getStudents, getStudentById, createStudent, updateStudent, deleteStudent, getStudentActivities } from '../controllers/student.js';

const router = express.Router()


router.get('/', getStudents)
router.get('/:id', getStudentById)
router.post('/', createStudent);
router.patch('/:id', updateStudent)
router.delete('/:id', deleteStudent)

//get activities by student
router.get('/find/:id', getStudentActivities)


export default router;
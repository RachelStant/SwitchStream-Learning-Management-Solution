import studentModel from "../models/students.js";


export const getStudents = async (req, res) => {
    try {
        const studentData = await studentModel.find()
        res.status(200).json(studentData)
    } catch (error) {
        console.log(error.message)
        res.status(404).json({ message: error.message })
    }
}

export const getStudentById = async (req,res) => {
    try {
        const foundStudent = await studentModel.findById(req.params.id)
        res.status(200).json(foundStudent)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const createStudent = async (req, res) => {
    const newStudent = new studentModel(req.body)

    try {
        await newStudent.save()
        res.status(201).json(newStudent)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}



export const updateStudent = async (req,res) => {
    try {
        const updatedStudent = await studentModel.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.status(200).json(updatedStudent)
    
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await studentModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedStudent)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getStudentActivities = async (req,res) => {
    try {
        const studentActivities = await studentModel.findById(req.params.id).populate('singleSWActivity')
        res.status(200).json(studentActivities.singleSWActivity)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


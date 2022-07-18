import SingleActivityModel from "../models/singleActivity.js";
import studentModel from "../models/students.js";



export const createSingleActivity = async(req, res) => {
   
    const { studentId } = req.params
    //The activity now has a reference to which student completed it
    const newActivity = new SingleActivityModel({...req.body, student: studentId})
   
    try {
     await newActivity.save()

     //Find the student (document) that completed the activity in Student Collection
     const studentByActivity = await studentModel.findById(studentId);
        
    //Push the new activity (ObjectId ref) to that student's activity array
    studentByActivity.singleSWActivity.push(newActivity._id)
     await studentByActivity.save()
    res.status(200).json(studentByActivity)

    } catch (error) {
    res.status(400).json({ message: error.message })
    }
}
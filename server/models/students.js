import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    date: { type: Date, default: new Date()},
    singleSWActivity: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SingleActivity' }]
})



const studentModel = mongoose.model('students', studentSchema, 'students')

export default studentModel;
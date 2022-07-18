import mongoose from "mongoose";

//student points to the _id in students collection

const singleSwitchActivitySchema = new mongoose.Schema({
    activityName: String,
    activityObserver: String,
    switchPosition: String,
    activityAttempts: Array,
    activityScore: Number,
    activityPrompting: Number,
    activityEngagement: Number,
    activityComment: String,
    activityDate: { type: Date, default: new Date()},
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'students' }
    
})

const SingleActivityModel = mongoose.model('SingleActivity', singleSwitchActivitySchema)

export default SingleActivityModel;


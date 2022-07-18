import express from "express";
import { createSingleActivity } from '../controllers/singleActivity.js';


const activityRouter = express.Router();

activityRouter.post('/:studentId', createSingleActivity)



export default activityRouter;
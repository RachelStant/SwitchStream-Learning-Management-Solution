import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';
import activityRouter from './routes/singleActivity.js';
import dotenv from 'dotenv';


const app = express()
dotenv.config();

console.log(process.env)

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/students', studentRoutes)
app.use('/activity', activityRouter)


const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => 
        console.log(`App is running on port ${PORT}`)
    ))
    .catch((err) => console.log(err.message))
import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors'


dotenv.config();
const app = express();

//routers
import catsRoutes from './routes/catsRoutes.js'

//db
import connectDB from "./db/connect.js";

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Connected To Express!');
})

const port = process.env.PORT || 5000;

app.use('/api/v1/cats', catsRoutes);

//mongoose
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        
        app.listen(port, () => console.log(`Server listening on port ${port}`))
    } catch (err) {
        console.log(err);
    }
}

start();
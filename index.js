import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import authRoute from './routes/auth.js';

const app = express();

//constants
const PORT = 8080;

//middleware
app.use(cors()); //для того щоб можно було відправляти з різних ip, запроси до нашого серверу
app.use(express.json()); //для  того щоб express розумів що дані з фронту будуть приходити у форматі json

//routes
//routes http://localhost:8080/
app.use('/api/auth', authRoute);

async function start() {
    try {
        await mongoose.connect(
            `mongodb+srv://merkushyndev13:merkushyndev13@cluster0.klmnxgz.mongodb.net/`
        );
        app.listen(PORT, () => {
            console.log(`server started on: http://localhost:${PORT}`)
        });
    } catch (error) {
        console.log(error);
    }
}
start();
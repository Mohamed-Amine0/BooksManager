import express, { request } from "express";
import { PORT, MONGODNURL } from "./config.js";
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import bookRoute from './routes/booksRoute.js';
import cors from 'cors'; // Add this line

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
// })
// );

app.get("/", (request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to MERN Stack Project')
});

// Use a middleware to handle all routes starting with /books
app.use('/books', bookRoute);

mongoose
    .connect(MONGODNURL)
    .then(() => {
        console.log('App connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB', error);
    });
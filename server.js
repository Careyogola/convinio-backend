import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/Auth-Routes.js'

dotenv.config();

const app = express();

// GOOD PRACTICE SHOWS MIDDLEWARES SHOULD COME FIRST

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//ROUTES IMPORTS

app.use('/api/auth', authRoutes);

const port = process.env.PORT || 5000 ;

app.listen(port, ()=> {
    console.log(`convinio server running on: http://localhost:${port}`);
});
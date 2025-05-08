import express, { Router } from 'express';
import { signup } from '../controllers/Auth-Controller.js';

const router = express.Router();

router.get('/signup', signup);

export default Router;
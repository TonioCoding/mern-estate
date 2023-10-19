import express from 'express';
import { google, signup, signIn, signOut } from '../controllers/auth.controller.js';


const router = express.Router();

router.post("/signup", signup)
router.post("/sign-in", signIn)
router.post('/google', google) 
router.get('/signout', signOut)


export default router
import express from 'express';
import { getUsers } from '../controllers/user.js';
const router = express.Router();

// http://localhost:3000/users

router.get('/', getUsers);

export default router;

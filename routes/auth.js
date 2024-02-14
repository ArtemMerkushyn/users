import { Router } from 'express';
import { getAllUsers, login, register } from "../controllers/auth.js";

const router = new Router();

// register http://localhost:8080/api/auth/register
router.post('/register', register);

// login http://localhost:8080/api/auth/login
router.post('/login', login);

// http://localhost:8080/api/auth/users
router.get('/users', getAllUsers);

export default router;
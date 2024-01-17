import express, { Router, Request, Response } from 'express';
import UserController from '../controllers/userController'

const router: Router = express.Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

export default router;
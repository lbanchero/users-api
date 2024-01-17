import express, { Router } from 'express';
import UserRepository from '../repositories/userRepository';
import UserController from '../controllers/userController';
import UserService from '../services/userService';

const router: Router = express.Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.get('/', userController.getAllUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));

export default router;
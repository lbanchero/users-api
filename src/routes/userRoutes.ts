import express, { Router } from 'express';
import { container } from 'tsyringe';
import UserController from '../controllers/userController';
import { validateCreateUser, validateGetUsers } from '../validators/userValidator';

export default function configureUserRoutes(router: Router): void {
    const userController = container.resolve(UserController);

    router.get('/users', validateGetUsers, userController.getAllUsers.bind(userController));
    router.post('/users', validateCreateUser, userController.createUser.bind(userController));
}
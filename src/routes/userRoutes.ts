import express, { Router } from 'express';
import { container } from 'tsyringe';
import UserController from '../controllers/userController';

export default function configureUserRoutes(router: Router): void {
    const userController = container.resolve(UserController);

    router.get('/users', userController.getAllUsers.bind(userController));
    router.post('/users', userController.createUser.bind(userController));
}
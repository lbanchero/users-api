import express, { Router } from 'express';
import { container } from 'tsyringe';
import UserController from '../controllers/userController';
import { validateCreateUser, validateGetUsers } from '../validators/userValidator';

export default function configureUserRoutes(router: Router): void {
    const userController = container.resolve(UserController);

    /**
     * @openapi
     * /users:
     *   get:
     *     summary: Retrieves a list of users
     *     description: Get a list of all users with optional sorting by creation date.
     *     tags:
     *       - Users
     *     parameters:
     *       - in: query
     *         name: created
     *         schema:
     *           type: string
     *         required: false
     *         description: Sort users by creation date, expects 'asc' or 'desc'.
     *     responses:
     *       200:
     *         description: A JSON array of users.
     *       400:
     *         description: Bad request if the sorting parameter is invalid.
     *       500:
     *         description: Internal server error.
     */
    router.get('/users', validateGetUsers, userController.getAllUsers.bind(userController));

    /**
     * @openapi
     * /users:
     *   post:
     *     summary: Creates a new user
     *     description: Creates a new user with the given email.
     *     tags:
     *       - Users
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             properties:
     *               email:
     *                 type: string
     *                 format: email
     *                 example: user@example.com
     *             required:
     *               - email
     *     responses:
     *       200:
     *         description: User created successfully
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/UserDto'
     *       400:
     *         description: Bad request if some of the required fields are missing or invalid.
     *       409:
     *        description: Conflict if the user already exists.
     *       500:
     *        description: Internal server error.
     */
    router.post('/users', validateCreateUser, userController.createUser.bind(userController));
}

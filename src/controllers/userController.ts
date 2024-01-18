import { injectable, inject } from 'tsyringe';
import { Request, Response } from 'express';
import IUserService from '../services/interfaces/IUserService';

@injectable()
class UserController {
    constructor(
        @inject("IUserService") private userService: IUserService
    ) {}

    public async getAllUsers(req: Request, res: Response) {
        try {
            const sort = req.query.created as string;
            const users = await this.userService.getAll(sort);
            res.status(200).send(users);
        } catch (error) {
            console.error('Error retrieving users:', error);
            res.status(500).send({ error: 'Internal Server Error' });
        }
    }

    public async createUser(req: Request, res: Response) {
        const createdUser = await this.userService.create(req.body.email);
        res.send(createdUser).status(200);
    }
}

export default UserController;
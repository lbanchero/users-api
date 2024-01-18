import { injectable, inject } from 'tsyringe';
import { Request, Response, NextFunction } from 'express';
import IUserService from '../services/interfaces/IUserService';

@injectable()
class UserController {
    constructor(
        @inject("IUserService") private userService: IUserService
    ) {}

    public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const sort = req.query.created as string;
            const users = await this.userService.getAll(sort);
            res.status(200).send(users);
        } catch (error) {
            next(error);
        }
    }

    public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const createdUser = await this.userService.create(req.body.email);
            res.status(200).send(createdUser);
        } catch (error) {
            next(error);
        }
    }
}

export default UserController;
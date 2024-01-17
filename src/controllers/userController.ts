import { injectable, inject } from 'tsyringe';
import { Request, Response } from 'express';
import IUserService from '../services/interfaces/IUserService';

@injectable()
class UserController {
    constructor(
        @inject("IUserService") private userService: IUserService
    ) {}

    public getAllUsers(req: Request, res: Response) {
        res.send({}).status(200);
    }

    public async createUser(req: Request, res: Response) {
        const createdUser = await this.userService.create(req.body.email);

        res.send(createdUser).status(200);
    }
}

export default UserController;
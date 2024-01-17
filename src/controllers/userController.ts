import { Request, Response } from 'express';
import IUserService from '../services/interfaces/IUserService';

class UserController {
    private userService: IUserService;

    constructor(userService: IUserService) {
        this.userService = userService;
    }

    public getAllUsers(req: Request, res: Response) {
        res.send({}).status(200);
    }

    public async createUser(req: Request, res: Response) {
        const createdUser = await this.userService.create(req.body.email);

        res.send(createdUser).status(200);
    }
}

export default UserController;
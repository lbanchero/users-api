import { Request, Response } from 'express';

class UserController {
    static getAllUsers(req: Request, res: Response) {
        res.send({}).status(200);
    }

    static createUser(req: Request, res: Response) {
        res.send({}).status(201);
    }
}

export default UserController;
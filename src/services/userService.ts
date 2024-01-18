import { injectable, inject } from 'tsyringe';
import { ObjectId } from 'mongodb';
import IUser from "../models/interfaces/IUser";
import IUserRepository from "../repositories/interfaces/IUserRepository";
import IUserService from "./interfaces/IUserService";

@injectable()
class UserService implements IUserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    public async getAll(sort?: string): Promise<IUser[]> {
        return await this.userRepository.getAllUsers(sort);
    }

    public async create(email: string): Promise<IUser> {
        const user: IUser = {
            _id: new ObjectId(),
            email: email,
            createdAt: new Date(),
        };

        return await this.userRepository.createUser(user);
    }
}

export default UserService;

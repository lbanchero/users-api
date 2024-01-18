import { injectable, inject } from 'tsyringe';
import { ObjectId } from 'mongodb';
import IUser from "../models/interfaces/IUser";
import IUserRepository from "../repositories/interfaces/IUserRepository";
import IUserService from "./interfaces/IUserService";
import { StatusError } from '../utils/statusError';
import { UserDto } from '../dtos/userDto';

@injectable()
class UserService implements IUserService {
    constructor(
        @inject("IUserRepository") private userRepository: IUserRepository
    ) {}

    public async getAll(sort?: string): Promise<UserDto[]> {
        const users = await this.userRepository.getAllUsers(sort);
        return users.map(user => new UserDto(user));
    }

    public async create(email: string): Promise<UserDto> {
        const userExists = await this.userRepository.checkUserExistsByEmail(email);
        if (userExists) {
            throw new StatusError('User already exists with this email', 409);
        }

        const user: IUser = {
            _id: new ObjectId(),
            email: email,
            createdAt: new Date(),
        };

        const createdUser = await this.userRepository.createUser(user);
        return new UserDto(createdUser);
    }
}

export default UserService;

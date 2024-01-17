import IUser from "../models/interfaces/IUser";
import UserRepository from "../repositories/userRepository";
import IUserService from "./interfaces/IUserService";

class UserService implements IUserService {
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async create(email: string): Promise<IUser> {
        const user: IUser = {
            email: email,
            createdAt: new Date(),
        };

        return await this.userRepository.createUser(user);
    }
}

export default UserService;

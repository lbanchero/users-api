import { injectable } from 'tsyringe';
import UserModel from '../models/user';
import IUser from '../models/interfaces/IUser';
import IUserRepository from './interfaces/IUserRepository';

@injectable()
class UserRepository implements IUserRepository {
    public async createUser(userDetails: IUser): Promise<IUser> {
        try {
            const user = new UserModel(userDetails);
            await user.save();

            return user.toObject();
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }
}

export default UserRepository;
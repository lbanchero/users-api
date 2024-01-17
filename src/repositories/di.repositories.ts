
import { container } from 'tsyringe';
import UserRepository from './userRepository';
import IUserRepository from './interfaces/IUserRepository';

export default function registerRepositories() {
    container.registerSingleton<IUserRepository>("IUserRepository", UserRepository);
}
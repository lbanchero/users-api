import { container } from 'tsyringe';
import UserService from './userService';
import IUserService from './interfaces/IUserService';

export default function registerServices() {
    container.registerSingleton<IUserService>("IUserService", UserService);
}
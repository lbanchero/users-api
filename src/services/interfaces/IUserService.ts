import IUser from "../../models/interfaces/IUser";

interface IUserService {
    getAll(sort?: string): Promise<IUser[]>
    create(email: string): Promise<IUser>
}

export default IUserService;
import IUser from "../../models/interfaces/IUser";

interface IUserRepository {
    getAllUsers(sort?: string): Promise<IUser[]>
    createUser(userDetails: IUser): Promise<IUser>
}

export default IUserRepository;
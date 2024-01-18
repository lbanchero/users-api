import IUser from "../../models/interfaces/IUser";

interface IUserRepository {
    checkUserExistsByEmail(email: string): Promise<boolean>
    getAllUsers(sort?: string): Promise<IUser[]>
    createUser(userDetails: IUser): Promise<IUser>
}

export default IUserRepository;
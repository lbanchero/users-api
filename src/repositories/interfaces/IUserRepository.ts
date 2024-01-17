import IUser from "../../models/interfaces/IUser";

interface IUserRepository {
    createUser(userDetails: IUser): Promise<IUser>
}

export default IUserRepository;
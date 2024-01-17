import IUser from "../../models/interfaces/IUser";

interface IUserService {
    create(email: string): Promise<IUser>
}

export default IUserService;
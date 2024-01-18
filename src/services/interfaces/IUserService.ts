import { UserDto } from "../../dtos/userDto";

interface IUserService {
    getAll(sort?: string): Promise<UserDto[]>
    create(email: string): Promise<UserDto>
}

export default IUserService;
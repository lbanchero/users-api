import IUser from "../models/interfaces/IUser";

export class UserDto {
    id?: string;
    email?: string;
    createdAt?: Date;

    constructor(user: IUser) {
        this.id = user._id.toString();
        this.email = user.email;
        this.createdAt = user.createdAt;
    }
}
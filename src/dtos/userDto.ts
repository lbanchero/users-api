import IUser from "../models/interfaces/IUser";

/**
 * @openapi
 * components:
 *   schemas:
 *     UserDto:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         id:
 *           type: string
 *         email:
 *           type: string
 *         created:
 *           type: string
 *           format: date-time
 */

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
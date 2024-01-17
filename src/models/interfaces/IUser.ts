import { ObjectId } from 'mongodb';

interface IUser {
    _id: ObjectId;
    email: string;
    createdAt: Date;
}

export default IUser;
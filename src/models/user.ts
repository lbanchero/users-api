import mongoose from 'mongoose';
import IUser from './interfaces/IUser';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    createdAt: {
        type: Date,
        required: true,
    }
});

const UserModel = mongoose.model<IUser & mongoose.Document>('User', userSchema);

export default UserModel;
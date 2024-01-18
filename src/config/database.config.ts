import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default class Database {
    private static instance: Database;
    private uri: string;

    private constructor() {
        this.uri = process.env.MONGO_DB_URL || 'TEST';
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public connect = async (): Promise<void> => {
        try {
            await mongoose.connect(this.uri);
            console.log('MongoDB Connected');
        } catch (error) {
            console.error('MongoDB connection error:', error);
            process.exit(1);
        }
    };
}

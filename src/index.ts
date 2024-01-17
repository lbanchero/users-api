import express, {Express, Request, Response} from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { Database } from './config/database.config';

dotenv.config();

const app: Express = express();
app.use(cors())
  .use(express.json())
  .options('*', cors());

app.use('/users', userRoutes);

const port = process.env.PORT || 3111;

Database.getInstance().connect();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

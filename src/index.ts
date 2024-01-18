import 'reflect-metadata';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import configureDependencyInjection from './config/di.config';
import configureRoutes from './config/routes.config';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.config';
import managedErrorMiddleware from './middlewares/managedErrorMiddleware';
import notFoundErrorMiddleware from './middlewares/notFoundErrorMiddleware';
import connectDB from './config/database.config';

dotenv.config();

configureDependencyInjection();

const app: Express = express();
app.use(cors())
  .use(express.json())
  .options('*', cors());

app.use(configureRoutes());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(managedErrorMiddleware);
app.use(notFoundErrorMiddleware);

const port = process.env.PORT || 3111;

connectDB();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

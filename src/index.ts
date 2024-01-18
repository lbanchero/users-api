import 'reflect-metadata';
import express, { Express } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import Database from './config/database.config';
import configureDI from './config/di.config';
import configureRoutes from './config/routes.config';
import configureMiddlewares from './config/middlewares.config';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.config';

dotenv.config();

configureDI();

const app: Express = express();
app.use(cors())
  .use(express.json())
  .options('*', cors());

app.use(configureRoutes());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(configureMiddlewares)

const port = process.env.PORT || 3111;

Database.getInstance().connect();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

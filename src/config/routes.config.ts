import express, { Router } from 'express';
import configureUserRoutes from '../routes/userRoutes';

export default function configureRoutes(): Router {
    const router = express.Router();

    configureUserRoutes(router);

    return router;
}
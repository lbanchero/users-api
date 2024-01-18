import { Router } from 'express';
import notFoundErrorMiddleware from '../middlewares/notFoundErrorMiddleware';
import managedErrorMiddleware from '../middlewares/managedErrorMiddleware';
import generalErrorMiddleware from '../middlewares/generalErrorMiddleware';

export default function configureMiddlewares(): Router {
    const router = Router();

    router.use(managedErrorMiddleware);
    router.use(generalErrorMiddleware);
    router.use(notFoundErrorMiddleware);

    return router;
}
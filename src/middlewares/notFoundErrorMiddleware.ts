import { Request, Response, NextFunction } from 'express';

export default function notFoundErrorMiddleware(req: Request, res: Response, next: NextFunction) {
    res.status(404).send({ error: 'Requested URL does not exist.' });
};
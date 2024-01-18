import { Request, Response, NextFunction } from 'express';

export default function notFoundErrorMiddleware(req: Request, res: Response, next: NextFunction) {
    res.status(404)
       .json({ error: 'Requested URL does not exist.' });
};
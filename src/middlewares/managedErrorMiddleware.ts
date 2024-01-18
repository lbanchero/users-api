import { Request, Response, NextFunction } from 'express';
import { StatusError } from '../utils/statusError';

export default function managedErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    if (err instanceof StatusError) {
        res.status(err.status).json({
            error: {
                status: err.status,
                message: err.message,
            },
        });
    } else {
        next(err);
    }
}
import { Request, Response, NextFunction } from 'express';
import { IStatusError } from '../types/IStatusError';

export default function managedErrorMiddleware(err: IStatusError, req: Request, res: Response, next: NextFunction) {
    if (err.status) {
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
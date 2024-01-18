import { Request, Response, NextFunction } from 'express';

export default function generalErrorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err);
    res.status(500).send('There was an error processing the request. Try again in a few minutes.');
};
import { query, body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { StatusError } from '../utils/statusError';

export const validateGetUsers = [
    query('created')
        .optional({ checkFalsy: true }).custom((value) => ['asc', 'desc'].includes(value)).withMessage('Invalid sort parameter'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array().map(err => err.msg).join(', ');
            return next(new StatusError(errorMessage, 400));
        }
        next();
    }
];

export const validateCreateUser = [
    body()
        .notEmpty().withMessage('Request body is required'),
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Invalid email format'),
    (req: Request, res: Response, next: NextFunction) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.array().map(err => err.msg).join(', ');
            next(new StatusError(errorMessage, 400));
        }
        next();
    }
];
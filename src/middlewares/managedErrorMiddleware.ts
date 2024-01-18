import { Request, Response, NextFunction } from 'express';
import { StatusError } from '../utils/statusError';

function errorMiddleware(error: StatusError, request: Request, response: Response, next: NextFunction) {
  const status = error.status ? error.status : 500;
  const message = status === 500 ? "There was an error processing the request. Try again in a few minutes." : error.message;
  response.status(status).send({ status, message, stack: error.stack });
}

export default errorMiddleware;
import { IStatusError } from "../types/IStatusError";

function createError(status: number, message: string): IStatusError {
    const error = new Error(message) as IStatusError;
    error.status = status;
    return error;
}

export default createError;
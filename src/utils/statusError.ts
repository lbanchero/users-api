export class StatusError extends Error {
    status: number;

    constructor(message: string, status: number) {
        super(message);
        this.status = status;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, StatusError);
        }

        this.name = 'StatusError';
    }
}
export class CustomError extends Error {
    __proto__ = Error;

    code: number;

    constructor(code: number, message: string) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}

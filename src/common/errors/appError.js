export class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4');
    this.IsOperacional = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

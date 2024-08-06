export class ApiError extends Error {
  public statusCode: number;
  public isOperational: boolean;

  constructor(statusCode: number, message: string, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = this.constructor.name;
  }

  public formatError(): { statusCode: number; message: string } {
    return {
      statusCode: this.statusCode,
      message: this.message,
    };
  }

  static BadRequestError = class extends ApiError {
    constructor(message: string) {
      super(400, message);
    }
  };

  static UnauthorizedError = class extends ApiError {
    constructor(message: string) {
      super(401, message);
    }
  };

  static ForbiddenError = class extends ApiError {
    constructor(message: string) {
      super(403, message);
    }
  };

  static NotFoundError = class extends ApiError {
    constructor(message: string) {
      super(404, message);
    }
  };

  static InternalServerError = class extends ApiError {
    constructor(message: string) {
      super(500, message);
    }
  };

  static ConflictError = class extends ApiError {
    constructor(message: string) {
      super(409, message);
    }
  };
}

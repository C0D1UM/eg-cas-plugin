import { Response } from 'express-serve-static-core';

export class ResponseUtil {
	public static sendUnauthorized = (res: Response, message = 'Unauthorized') =>
		res.status(401).json({
			name: 'AuthorizationError',
			code: 100,
			message
		});

	public static sendForbidden = (res: Response) =>
		res.status(401).json({
			name: 'Forbidden',
			code: 200,
			message: 'Forbidden'
		});

	public static sendTokenExpiredError = (res: Response) =>
		res.status(401).json({
			name: 'TokenExpiredError',
			code: 101,
			message: 'Token is expired'
		});

	public static sendRefreshExpiredError = (res: Response) =>
		res.status(401).json({
			name: 'RefreshExpiredError',
			code: 110,
			message: 'Refresh token is expired'
		});

	public static sendInvalidId = (res: Response) =>
		res.status(400).json({
			name: 'InvalidIdError',
			code: 102,
			message: 'Invalid ID'
		});

	public static sendNotFound = (res: Response) =>
		res.status(404).json({
			name: 'Not Found',
			code: 104,
			message: 'Object not found',
		});

	public static sendValidationError = (res: Response, errors: any[]) =>
		res.status(400).json({
			name: 'ValidationError',
			code: 103,
			message: 'Request parameters is not valid',
			errors
		});

	public static sendDuplicateKeyError = function(
		res: Response,
		message: string,
		errors: any[]
	) {
		res.status(400).json({
			name: 'SequelizeUniqueConstraintError',
			code: 11000,
			message,
			errors
		});
	};
}

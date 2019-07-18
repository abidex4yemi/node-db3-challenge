'use strict';

import { Scheme } from '../model';
import { NOT_FOUND, createError } from '../util';

/**
 * Validate scheme request parameter id
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @param {*} SchemeID
 */
export const validateSchemeParam = async (req, res, next, SchemeID) => {
	try {
		const scheme = await Scheme.getById(SchemeID);

		if (!scheme) {
			return next(
				createError({
					message: 'Scheme ID is invalid.',
					status: NOT_FOUND
				})
			);
		}

		req.scheme = scheme;

		next();
	} catch (error) {
		next(error);
	}
};

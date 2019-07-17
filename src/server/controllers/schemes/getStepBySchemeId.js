'use strict';

import { Scheme } from '../../model';
import { createSuccess, OK, createError, GENERIC_ERROR } from '../../util';

/**
 * Get step by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getStepBySchemeId = async (req, res, next) => {
	try {
		const schemeId = req.scheme.id;

		const steps = await Scheme.getStepBySchemeId(schemeId);

		return res.status(OK).json(createSuccess({ data: steps }));
	} catch (error) {
		return next(
			createError({
				message: 'Failed to get steps',
				status: GENERIC_ERROR
			})
		);
	}
};

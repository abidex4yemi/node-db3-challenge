'use strict';

import { createSuccess, OK } from '../../util';

/**
 * Get scheme by id
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getSchemeById = (req, res) => {
	const scheme = req.scheme;

	return res.status(OK).json(createSuccess({ data: scheme }));
};

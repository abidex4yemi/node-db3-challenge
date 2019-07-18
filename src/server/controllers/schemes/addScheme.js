import { Scheme } from '../../model';
import { CREATED, createSuccess, createError, CONFLICT } from '../../util';

/**
 * Insert new scheme
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addScheme = async (req, res, next) => {
	try {
		// Get scheme details from req body
		const schemeDetails = req.body.sanitizedBody;

		// Insert new scheme
		const createdScheme = await Scheme.insert(schemeDetails);

		return res.status(CREATED).json(
			createSuccess({
				data: createdScheme,
				message: 'New scheme created.'
			})
		);
	} catch (error) {
		if (error.code === 'SQLITE_CONSTRAINT' && error.message.indexOf('failed: schemes.scheme_name')) {
			return next(
				createError({
					status: CONFLICT,
					message: 'Scheme name already exist'
				})
			);
		}
		next(error);
	}
};

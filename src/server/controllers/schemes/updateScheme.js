import { Scheme } from '../../model';
import { createSuccess, OK, createError, CONFLICT } from '../../util';

/**
 * Update scheme given the scheme id is valid
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const updateScheme = async (req, res, next) => {
	try {
		const schemeDetails = req.body.sanitizedBody;

		const schemeId = req.scheme.id;

		const updatedSchemeDetails = await Scheme.update(schemeId, schemeDetails);

		return res.status(OK).json(
			createSuccess({
				data: updatedSchemeDetails,
				message: 'Scheme updated successfully'
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

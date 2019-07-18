import { Scheme } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Get all schemes
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {object} next 
 */
export const getSchemes = async (req, res, next) => {
	try {
		const limit = req.query.limit;
		const sortBy = req.query.sortBy;
		const sortDir = req.query.sortDir;

		const schemes = await Scheme.getAll({ limit, sortBy, sortDir });

		return res.status(OK).json(
			createSuccess({
				data: schemes
			})
		);
	} catch (error) {
		return next(error);
	}
};

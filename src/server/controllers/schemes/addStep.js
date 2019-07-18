import { Scheme } from '../../model';
import { CREATED, createSuccess, createError, NOT_FOUND } from '../../util';

/**
 * Insert new step
 * 
 * @param {*} req 
 * @param {*} res
 * @param {*} next 
 */
export const addStep = async (req, res, next) => {
	try {
		// Get step details from req body
		const stepDetails = req.body.sanitizedBody;

		await Scheme.getById(stepDetails.scheme_id);

		// Insert new step
		const schemeStep = await Scheme.addStep(stepDetails);

		return res.status(CREATED).json(
			createSuccess({
				data: schemeStep,
				message: 'New step created.'
			})
		);
	} catch (error) {
		next(
			createError({
				message: 'Scheme ID is invalid.',
				status: NOT_FOUND
			})
		);
	}
};

import { Scheme } from '../../model';
import { OK, createSuccess } from '../../util';

/**
 * Delete a scheme given the id is valid
 * 
 * @param {*} req
 * @param {*} res 
 * @param {*} next 
 */
export const deleteScheme = async (req, res, next) => {
	try {
		const { id } = req.scheme;

		// Delete scheme from database using specified id
		await Scheme.remove(id);

		return res.status(OK).json(
			createSuccess({
				success: true,
				message: 'Scheme deleted successfully',
				data: req.scheme
			})
		);
	} catch (error) {
		next(error);
	}
};

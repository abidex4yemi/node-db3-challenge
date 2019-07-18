import Joi from '@hapi/joi';
import { joiValidate } from '../util';

/**
 * Step validation schema
 */
const stepSchema = Joi.object().keys({
	step_number: Joi.number().required(),
	instructions: Joi.string()
		.trim()
		.required(),
	scheme_id: Joi.number().required()
});

/**
 * Validate step body against defined schema
 */
export const validateStepBody = (req, res, next) => {
	joiValidate(req, res, next, stepSchema);
};

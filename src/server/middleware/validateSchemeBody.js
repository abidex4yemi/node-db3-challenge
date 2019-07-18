import Joi from '@hapi/joi';
import { joiValidate } from '../util';

/**
 * Scheme validation schema
 */
const schemeSchema = Joi.object().keys({
	scheme_name: Joi.string()
		.trim()
		.required()
});

/**
 * Validate scheme body against defined schema
 */
export const validateSchemeBody = (req, res, next) => {
	joiValidate(req, res, next, schemeSchema);
};

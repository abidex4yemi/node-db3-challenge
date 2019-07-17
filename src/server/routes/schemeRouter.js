import express from 'express';
import {
	addScheme,
	updateScheme,
	deleteScheme,
	getSchemeById,
	getSchemes,
	getStepBySchemeId,
	addStep
} from '../controllers/schemes';
import { validateSchemeBody, validateSchemeParam, validateStepBody } from '../middleware';

const router = express.Router();

router.param('id', validateSchemeParam);

router
	.route('/schemes')
	.get(getSchemes)
	.post(validateSchemeBody, addScheme);

router
	.route('/schemes/:id')
	.get(getSchemeById)
	.put(validateSchemeBody, updateScheme)
	.delete(deleteScheme);

router
	.route('/schemes/:id/steps')
	.get(getStepBySchemeId)
	.post(validateStepBody, addStep);

export { router as schemeRouter };

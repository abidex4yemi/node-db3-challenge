import express from 'express';
import { addScheme, updateScheme, deleteScheme, getSchemeById, getSchemes } from '../controllers/schemes';
import { validateSchemeBody, validateSchemeParam } from '../middleware';

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

export { router as schemeRouter };

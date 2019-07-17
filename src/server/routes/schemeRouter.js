import express from 'express';
import { addScheme, updateScheme, deleteScheme } from '../controllers/schemes';
import { validateSchemeBody, validateSchemeParam } from '../middleware';

const router = express.Router();

router.param('id', validateSchemeParam);

router.route('/schemes').post(validateSchemeBody, addScheme);

router
	.route('/schemes/:id')
	.put(validateSchemeBody, updateScheme)
	.delete(deleteScheme);

export { router as schemeRouter };

import express from 'express';
import { addScheme } from '../controllers/schemes';
import { validateSchemeBody } from '../middleware';

const router = express.Router();

router.route('/schemes').post(validateSchemeBody, addScheme);

export { router as schemeRouter };

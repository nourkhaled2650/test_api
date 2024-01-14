import { getFixtures } from '../controllers/fora_controller';
import express from 'express';
const router = express.Router();

router.get('/', getFixtures);

export default router;

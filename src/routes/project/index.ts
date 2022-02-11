import { Router } from 'express';
import { createProject } from './create-project';

const router = Router();

router.use([createProject]);

export { router as projectRouter };

import { Router } from 'express';

import { createProject } from './create-project';
import { getProject } from './get-project';

const router = Router();

router.use([createProject, getProject]);

export { router as projectRouter };

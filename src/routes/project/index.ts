import { Router } from 'express';

import { createProject } from './create-project';
import { getProject } from './get-project';
import { getProjects } from './get-projects';

const router = Router();

router.use([createProject, getProject, getProjects]);

export { router as projectRouter };

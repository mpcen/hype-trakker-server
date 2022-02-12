import { Router } from 'express';

import { createProject } from './create-project';
import { getProject } from './get-project';
import { getProjects } from './get-projects';
import { updateProject } from './update-project';
import { deleteProject } from './delete-project';

const router = Router();

router.use([createProject, getProject, getProjects, updateProject, deleteProject]);

export { router as projectRouter };

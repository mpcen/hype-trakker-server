import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createProject } from './project-create';
import { getProject } from './project-get';
import { getProjects } from './projects-get';
import { updateProject } from './project-update';
import { ProjectService } from '../../services/ProjectService';
import { ProjectRepository } from '../../repositories/ProjectRepository';
import { requireAuth } from '../../middleware/requireAuth';
import { archiveProject } from './project-archive';

export function getProjectRoutes(router: Router, prismaClient: PrismaClient) {
    const projectRepository = new ProjectRepository(prismaClient);
    const projectService = new ProjectService(projectRepository);

    router.use(requireAuth);

    router.get('/', getProjects(projectService));
    router.get('/:id', getProject(projectService));
    router.put('/:id', updateProject(projectService));
    router.post('/', createProject(projectService));
    router.delete('/:id', archiveProject(projectService));

    return router;
}

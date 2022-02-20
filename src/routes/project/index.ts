import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createProject } from './project-create';
import { getProject } from './project-get';
import { getProjects } from './projects-get';
import { updateProject } from './project-update';
import { deleteProject } from './project-delete';
import { ProjectService } from '../../services/ProjectService';
import { ProjectRepository } from '../../repositories/ProjectRepository';
import { UserProjectService } from '../../services/UserProjectService';
import { UserProjectRepository } from '../../repositories/UserProjectRepository';
import { requireAuth } from '../../middleware/requireAuth';

export function getProjectRoutes(router: Router, prismaClient: PrismaClient) {
    const projectRepository = new ProjectRepository(prismaClient);
    const projectService = new ProjectService(projectRepository);
    const userProjectRepository = new UserProjectRepository(prismaClient);
    const userProjectService = new UserProjectService(userProjectRepository);

    router.use(requireAuth);

    router.get('/all', getProjects(projectService));
    router.get('/:id', getProject(projectService));
    router.post('/', createProject(projectService, userProjectService));
    router.put('/:id', updateProject(projectService));
    router.delete('/:id', deleteProject(projectService));

    return router;
}

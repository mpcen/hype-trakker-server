import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createProject } from './project-create';
import { getProject } from './project-get';
import { getProjects } from './projects-get';
import { updateProject } from './project-update';
import { deleteProject } from './project-delete';
import { ProjectService } from '../../services/ProjectService';
import { ProjectRepository } from '../../repositories/ProjectRepository';

export function getProjectRoutes(router: Router, prismaClient: PrismaClient) {
    const projectRepository = new ProjectRepository(prismaClient);
    const projectService = new ProjectService(projectRepository);

    router.get('/all', getProjects(projectService));
    router.get('/:id', getProject(projectService));
    router.post('/', createProject(projectService));
    router.put('/:id', updateProject(projectService));
    router.delete('/:id', deleteProject(projectService));

    return router;
}

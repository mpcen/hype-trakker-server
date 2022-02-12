import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createProject } from './project-create';
import { getProject } from './project-get';
import { getProjects } from './projects-get';
import { updateProject } from './update-project';
import { deleteProject } from './project-delete';

export function projectRouter(router: Router, prisma: PrismaClient) {
    return [
        router.get('/', getProjects(prisma)),
        router.get('/:id', getProject(prisma)),
        router.post('/', createProject(prisma)),
        router.put('/:id', updateProject(prisma)),
        router.delete('/:id', deleteProject(prisma)),
    ];
}

import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { projectRouter } from './project';

export function api(router: Router, prisma: PrismaClient) {
    return [router.use('/projects', projectRouter(router, prisma))];
}

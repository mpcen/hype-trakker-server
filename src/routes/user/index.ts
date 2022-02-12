import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createUser } from './user-create';
import { getUser } from './user-get';

export function getUserRoutes(router: Router, prisma: PrismaClient) {
    router.get('/', getUser(prisma));
    router.post('/', createUser(prisma));

    return router;
}

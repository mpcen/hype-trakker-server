import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createUser } from './user-create';
import { getUser } from './user-get';
import { getAllUsers } from './user-get-all';

export function getUserRoutes(router: Router, prisma: PrismaClient) {
    router.get('/', getUser(prisma));
    router.get('/all', getAllUsers(prisma));
    router.post('/', createUser(prisma));

    return router;
}

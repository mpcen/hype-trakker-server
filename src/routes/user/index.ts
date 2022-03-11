import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { createUser } from './user-create';
import { getUserById } from './user-get-by-id';
import { getUserByAddress } from './user-get-by-address';
import { getUsers } from './users-get';
import { UserRepository } from '../../repositories/UserRepository';
import { UserService } from '../../services/UserService';
import { updateUser } from './user-update';
import { deleteUser } from './user-delete';

export function getUserRoutes(router: Router, prismaClient: PrismaClient) {
    const userRepository = new UserRepository(prismaClient);
    const userService = new UserService(userRepository);

    router.get('/id/:id', getUserById(userService));
    router.post('/address/:address', getUserByAddress(userService));
    router.get('/all', getUsers(userService));
    router.post('/', createUser(userService));
    router.put('/:id', updateUser(userService));
    router.delete('/:id', deleteUser(userService));

    return router;
}

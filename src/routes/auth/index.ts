import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

import { AuthService } from '../../services/AuthService';
import { UserRepository } from '../../repositories/UserRepository';
import { UserService } from '../../services/UserService';
import { authUser } from './auth-user';

export function getAuthRoutes(router: Router, prismaClient: PrismaClient) {
    const userRepository = new UserRepository(prismaClient);
    const authService = new AuthService(userRepository);
    const userService = new UserService(userRepository);

    router.post('/', authUser(authService, userService));

    return router;
}

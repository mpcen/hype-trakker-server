import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @param id
 * @returns
 */
export const getAllUsers = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        try {
            const user = await prisma.user.findMany();

            res.send(user);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getAllUsers' });
        } finally {
        }
    };
};

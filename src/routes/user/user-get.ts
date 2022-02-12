import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @param id
 * @returns
 */
export const getUser = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { address } = req.query;

        if (!address) {
            return res.status(404).json({ message: 'User not found' });
        }

        try {
            const user = await prisma.user.findFirst({
                where: {
                    address: address as string,
                },
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.send(user);
        } catch (err) {
            return res.status(500).json({ message: 'UserService - Internal server error' });
        } finally {
        }
    };
};

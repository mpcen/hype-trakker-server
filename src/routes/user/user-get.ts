import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @param account
 * @returns
 */
export const getUser = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { account } = req.query;

        if (!account) {
            return res.status(404).json({ message: 'User not found' });
        }

        try {
            const user = await prisma.user.findFirst({
                where: {
                    address: account as string,
                },
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found', status: 404 });
            }

            res.send(user);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getUser' });
        } finally {
        }
    };
};

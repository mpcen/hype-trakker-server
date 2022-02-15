import { Prisma, PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

export const createUser = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        const user: Prisma.UserCreateInput = req.body;

        try {
            const newUser = await prisma.user.create({
                data: {
                    address: user.address,
                    nonce: Math.floor(Math.random() * 1000000),
                },
            });

            console.dir(newUser, { depth: null });

            res.send(newUser);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createUser' });
        } finally {
        }
    };
};

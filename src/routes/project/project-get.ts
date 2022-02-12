import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @param id
 * @returns
 */
export const getProject = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        try {
            const project = await prisma.project.findFirst({
                where: {
                    id: Number(req.params.id),
                },
            });

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            res.send(project);
        } catch (err) {
            return res.status(500).json({ message: 'ProjectService - Internal server error' });
        } finally {
        }
    };
};

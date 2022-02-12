import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @returns
 */
export const getProjects = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        try {
            const projects = await prisma.project.findMany();

            if (!projects) {
                return res.status(404).json({ message: 'No projects not found' });
            }

            res.send(projects);
        } catch (err) {
            return res.status(500).json({ message: 'ProjectService - Internal server error' });
        } finally {
        }
    };
};

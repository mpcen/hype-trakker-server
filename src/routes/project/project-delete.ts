import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

/**
 *
 * @param prisma
 * @param id
 * @returns
 */
export const deleteProject = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        try {
            const deletedProject = await prisma.project.delete({
                where: { id: Number(req.params.id) },
            });

            console.dir(deletedProject, { depth: null });

            res.send(deletedProject);
        } catch (err) {
            err;
        } finally {
        }
    };
};

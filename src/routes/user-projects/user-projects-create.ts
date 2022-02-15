import { PrismaClient } from '@prisma/client';
import { RequestHandler, Response } from 'express';

import { RequestCustom } from '../express-types';

export const createUserProject = (prisma: PrismaClient): RequestHandler => {
    return async (req: RequestCustom, res: Response) => {
        const { projectId, userProject } = req.body;

        try {
            const newUserProject = await prisma.userProjects.create({
                data: {
                    acquiredAllowList: userProject?.acquiredAllowList,
                    walletSubmitted: userProject?.walletSubmitted,
                    notes: userProject?.notes,
                    userId: req.user!.id,
                    projectId: projectId,
                },
            });

            console.dir(newUserProject, { depth: null });

            res.send(newUserProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createUserProject' });
        } finally {
        }
    };
};

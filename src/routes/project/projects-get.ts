import { RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';
import { RequestCustom } from '../express-types';

export const getProjects = (projectService: ProjectService): RequestHandler => {
    return async (req: RequestCustom, res: Response) => {
        const userId = req.user?.id;

        if (!userId) {
            return res.status(400).json({ message: 'You must pass in a userId' });
        }

        try {
            const projects = await projectService.getProjects(Number(userId));

            res.send(projects);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getProjects' });
        } finally {
        }
    };
};

import { RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';
import { RequestCustom } from '../express-types';

export const getProject = (projectService: ProjectService): RequestHandler => {
    return async (req: RequestCustom, res: Response) => {
        const projectId = req.params.id;
        const userId = req.user?.id;

        if (!userId || !projectId) {
            return res.status(400).json({ message: 'You must pass in userId and projectId' });
        }

        try {
            const project = await projectService.getProject(Number(userId), Number(projectId));

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            res.send(project);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getProject' });
        }
    };
};

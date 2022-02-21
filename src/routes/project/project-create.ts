import { RequestHandler, Response } from 'express';

import { Project } from '../../interfaces/Project';
import { ProjectService } from '../../services/ProjectService';
import { RequestCustom } from '../express-types';

export const createProject = (projectService: ProjectService): RequestHandler => {
    return async (req: RequestCustom, res: Response) => {
        const projectData: Project = req.body;
        const userId = req.user?.id;

        if (!userId || !projectData) {
            return res.status(400).json({ message: 'You must pass in a userId and project' });
        }

        try {
            const project = await projectService.createProject(Number(userId), projectData);

            res.json(project);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createProject' });
        }
    };
};

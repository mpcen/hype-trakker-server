import { Request, RequestHandler, Response } from 'express';

import { Project } from '../../interfaces/Project';
import { ProjectService } from '../../services/ProjectService';

export const createProject = (projectService: ProjectService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const data: Project = req.body;

        try {
            const newProject = await projectService.createProject(data);

            res.send(newProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createProject' });
        }
    };
};

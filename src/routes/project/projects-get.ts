import { Request, RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';

export const getProjects = (projectService: ProjectService): RequestHandler => {
    return async (_: Request, res: Response) => {
        try {
            const projects = await projectService.getProjects();

            res.send(projects);
        } catch (err) {
            return res.status(500).json({ message: 'getProjects - Internal server error' });
        } finally {
        }
    };
};

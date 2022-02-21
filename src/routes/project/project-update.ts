import { Request, RequestHandler, Response } from 'express';

import { Project } from '../../interfaces/Project';
import { ProjectService } from '../../services/ProjectService';

export const updateProject = (projectService: ProjectService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;
        const data: Project = req.body;

        try {
            const updatedProject = await projectService.updateProject(Number(id), data);

            res.send(updatedProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - updateProject' });
        }
    };
};

import { Request, RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';

export const getProject = (projectService: ProjectService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const project = await projectService.getProject(Number(id));

            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }

            res.send(project);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getProject' });
        }
    };
};

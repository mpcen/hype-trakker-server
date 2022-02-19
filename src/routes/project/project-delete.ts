import { Request, RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';

export const deleteProject = (projectService: ProjectService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const deletedProject = await projectService.deleteProject(Number(id));

            res.send(deletedProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - deleteProject' });
        } finally {
        }
    };
};

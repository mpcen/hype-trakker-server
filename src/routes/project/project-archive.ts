import { Request, RequestHandler, Response } from 'express';

import { ProjectService } from '../../services/ProjectService';

export const archiveProject = (projectService: ProjectService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;
        const { isArchived } = req.body;

        try {
            const archivedProject = await projectService.archiveProject(Number(id), isArchived);

            res.send(archivedProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - archiveProject' });
        }
    };
};

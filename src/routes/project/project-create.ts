import { RequestHandler, Response } from 'express';

import { Project } from '../../interfaces/Project';
import { ProjectService } from '../../services/ProjectService';
import { UserProjectService } from '../../services/UserProjectService';
import { RequestCustom } from '../express-types';

export const createProject = (
    projectService: ProjectService,
    userProjectService: UserProjectService
): RequestHandler => {
    return async (req: RequestCustom, res: Response) => {
        const projectData: Project = req.body;
        const id = req.user?.id;

        if (!id) {
            return res.status(400).json({ message: 'You need to pass a user id' });
        }

        try {
            const newProject = await projectService.createProject(projectData);
            const newUserProject = await userProjectService.createUserProject(
                id,
                newProject.project_id
            );

            res.json({ newProject, newUserProject });
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createProject' });
        }
    };
};

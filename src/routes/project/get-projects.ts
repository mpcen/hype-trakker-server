import { Router } from 'express';

import { prisma } from '../index';

const router = Router();

router.get('/', async (req, res) => {
    try {
        const projects = await prisma.project.findMany();

        if (!projects) {
            return res.status(404).json({ message: 'No projects not found' });
        }

        res.send(projects);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    } finally {
    }
});

export { router as getProjects };

import { Router } from 'express';

import { prisma } from '../index';

const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const project = await prisma.project.findFirst({
            where: {
                id: Number(req.params.id),
            },
        });

        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }

        res.send(project);
    } catch (err) {
        return res.status(500).json({ message: 'Internal server error' });
    } finally {
    }
});

export { router as getProject };

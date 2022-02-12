import { Router } from 'express';

import { prisma } from '../index';

const router = Router();

router.delete('/:id', async (req, res) => {
    try {
        const deletedProject = await prisma.project.delete({
            where: { id: Number(req.params.id) },
        });

        console.dir(deletedProject, { depth: null });

        res.send(deletedProject);
    } catch (err) {
        err;
    } finally {
    }
});

export { router as deleteProject };

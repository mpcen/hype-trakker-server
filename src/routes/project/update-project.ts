import { Prisma } from '@prisma/client';
import { Router } from 'express';

import { prisma } from '../index';

const router = Router();

router.put('/:id', async (req, res) => {
    const project: Prisma.ProjectCreateInput = req.body;

    try {
        const updatedProject = await prisma.project.update({
            where: { id: Number(req.params.id) },
            data: {
                name: project.name,
                description: project.description ? project.description : undefined,
                presaleDateTime: project.presaleDateTime ? project.presaleDateTime : undefined,
                publicSaleDateTime: project.publicSaleDateTime
                    ? project.publicSaleDateTime
                    : undefined,
                hasAllowList: project.hasAllowList ? project.hasAllowList : undefined,
                isRevealed: project.isRevealed ? project.isRevealed : undefined,
                projectState: project.projectState ? project.projectState : undefined,
                mintPrice: project.mintPrice ? project.mintPrice : undefined,
                maxMintPerTransaction: project.maxMintPerTransaction
                    ? project.maxMintPerTransaction
                    : undefined,
            },
        });

        console.dir(updatedProject, { depth: null });

        res.send(updatedProject);
    } catch (err) {
        err;
    } finally {
    }
});

export { router as updateProject };

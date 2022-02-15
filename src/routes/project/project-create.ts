import { Prisma, PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';

export const createProject = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        const project: Prisma.ProjectCreateInput = req.body;

        try {
            const newProject = await prisma.project.create({
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

            console.dir(newProject, { depth: null });

            res.send(newProject);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createProject' });
        } finally {
        }
    };
};

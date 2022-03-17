import { PrismaClient } from '@prisma/client';

import { Project } from '../interfaces/Project';

export class ProjectRepository {
    constructor(private prismaClient: PrismaClient) {}

    async getProjects(userId: number) {
        try {
            const projects = await this.prismaClient.project.findMany({
                where: {
                    createdBy: {
                        userId: userId,
                    },
                },
            });

            return projects;
        } catch (err) {
            console.log('ProjectRepository.getProjects error:', err);
            throw new Error('ProjectRepository.getProjects - Internal Server Error');
        }
    }

    async getProject(userId: number, projectId: number) {
        try {
            const project = await this.prismaClient.project.findFirst({
                where: {
                    projectId: projectId,
                    createdBy: {
                        userId: userId,
                    },
                },
            });

            return project;
        } catch (err) {
            console.log('ProjectRepository.getProject error:', err);
            throw new Error('ProjectRepository.getProject - Internal Server Error');
        }
    }

    async createProject(userId: number, projectData: Project) {
        try {
            const newProject = await this.prismaClient.project.create({
                data: {
                    name: projectData.name,
                    supply: projectData.supply,
                    totalAllowlistSpots: projectData.totalAllowlistSpots,
                    acquiredAllowList: projectData.acquiredAllowList,
                    plan: projectData.plan,
                    twitterHandle: projectData.twitterHandle,
                    discordUrl: projectData.discordUrl,
                    openseaUrl: projectData.openseaUrl,
                    presaleDatetime: projectData.presaleDatetime,
                    publicSaleDatetime: projectData.publicSaleDatetime,
                    revealDatetime: projectData.revealDatetime,
                    hasAllowList: projectData.hasAllowList,
                    isRevealed: projectData.isRevealed,
                    projectState: projectData.projectState,
                    presaleMintPrice: projectData.presaleMintPrice,
                    publicSaleMintPrice: projectData.publicSaleMintPrice,
                    presaleMaxMintPerTransaction: projectData.presaleMaxMintPerTransaction,
                    publicSaleMaxMintPerTransaction: projectData.publicSaleMaxMintPerTransaction,
                    contractAddress: projectData.contractAddress,
                    isArchived: projectData.isArchived,
                    createdBy: {
                        connect: {
                            userId: userId,
                        },
                    },
                },
            });

            console.dir(newProject, { depth: null });

            return newProject;
        } catch (err) {
            console.log('ProjectRepository.createProject error:', err);
            throw new Error('ProjectRepository.createProject - Internal Server Error');
        }
    }

    async updateProject(id: number, projectData: Project) {
        try {
            const updatedProject = await this.prismaClient.project.update({
                where: { projectId: id },
                data: {
                    name: projectData.name,
                    supply: projectData.supply,
                    totalAllowlistSpots: projectData.totalAllowlistSpots,
                    acquiredAllowList: projectData.acquiredAllowList,
                    plan: projectData.plan,
                    twitterHandle: projectData.twitterHandle,
                    discordUrl: projectData.discordUrl,
                    openseaUrl: projectData.openseaUrl,
                    presaleDatetime: projectData.presaleDatetime,
                    publicSaleDatetime: projectData.publicSaleDatetime,
                    revealDatetime: projectData.revealDatetime,
                    hasAllowList: projectData.hasAllowList,
                    isRevealed: projectData.isRevealed,
                    projectState: projectData.projectState,
                    presaleMintPrice: projectData.presaleMintPrice,
                    publicSaleMintPrice: projectData.publicSaleMintPrice,
                    presaleMaxMintPerTransaction: projectData.presaleMaxMintPerTransaction,
                    publicSaleMaxMintPerTransaction: projectData.publicSaleMaxMintPerTransaction,
                    contractAddress: projectData.contractAddress,
                    isArchived: projectData.isArchived,
                },
            });

            console.dir(updatedProject, { depth: null });

            return updatedProject;
        } catch (err) {
            console.log('ProjectRepository.updateProject error:', err);
            throw new Error('ProjectRepository.updateProject - Internal Server Error');
        }
    }

    // NOT USED ATM
    async deleteProject(id: number) {
        try {
            const deletedProject = await this.prismaClient.project.delete({
                where: { projectId: id },
            });

            console.dir(deletedProject, { depth: null });

            return deletedProject;
        } catch (err) {
            console.log('ProjectRepository.deleteProject error:', err);
            throw new Error('ProjectRepository.deleteProject - Internal Server Error');
        }
    }

    async archiveProject(id: number, isArchived: boolean) {
        try {
            const archivedProject = await this.prismaClient.project.update({
                where: { projectId: id },
                data: { isArchived },
            });

            console.dir(archivedProject, { depth: null });

            return archivedProject;
        } catch (err) {
            if (err instanceof Error) {
                throw new Error(err.message);
            } else {
                throw new Error('ProjectRepository.archiveProject - Internal Server Error');
            }
        }
    }
}

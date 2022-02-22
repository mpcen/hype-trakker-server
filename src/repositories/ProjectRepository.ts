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
                    allocatedAllowlistAmount: projectData.allocatedAllowlistAmount,
                    description: projectData.description,
                    twitterHandle: projectData.twitterHandle,
                    discordUrl: projectData.discordUrl,
                    openseaUrl: projectData.openseaUrl,
                    presaleDatetime: projectData.presaleDatetime,
                    publicSaleDatetime: projectData.publicSaleDatetime,
                    revealDatetime: projectData.revealDatetime,
                    hasAllowList: projectData.hasAllowList,
                    isRevealed: projectData.isRevealed,
                    projectState: projectData.projectState,
                    mintPrice: projectData.mintPrice,
                    maxMintPerTransaction: projectData.maxMintPerTransaction,
                    contractAddress: projectData.contractAddress,
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
                    allocatedAllowlistAmount: projectData.allocatedAllowlistAmount,
                    description: projectData.description,
                    twitterHandle: projectData.twitterHandle,
                    discordUrl: projectData.discordUrl,
                    openseaUrl: projectData.openseaUrl,
                    presaleDatetime: projectData.presaleDatetime,
                    publicSaleDatetime: projectData.publicSaleDatetime,
                    revealDatetime: projectData.revealDatetime,
                    hasAllowList: projectData.hasAllowList,
                    isRevealed: projectData.isRevealed,
                    projectState: projectData.projectState,
                    mintPrice: projectData.mintPrice,
                    maxMintPerTransaction: projectData.maxMintPerTransaction,
                    contractAddress: projectData.contractAddress,
                },
            });

            console.dir(updatedProject, { depth: null });

            return updatedProject;
        } catch (err) {
            console.log('ProjectRepository.updateProject error:', err);
            throw new Error('ProjectRepository.updateProject - Internal Server Error');
        }
    }

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
}

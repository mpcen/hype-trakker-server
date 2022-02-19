import { PrismaClient } from '@prisma/client';

import { Project } from '../interfaces/Project';

export class ProjectRepository {
    constructor(private prismaClient: PrismaClient) {}

    async getProjects() {
        try {
            const projects = await this.prismaClient.project.findMany();

            return projects;
        } catch (err) {
            console.log('ProjectRepository.getProjects error:', err);
            throw new Error('ProjectRepository.getProjects - Internal Server Error');
        }
    }

    async getProject(id: number) {
        try {
            const project = await this.prismaClient.project.findFirst({
                where: {
                    project_id: id,
                },
            });

            if (!project) {
                return null;
            }

            return project;
        } catch (err) {
            console.log('ProjectRepository.getProject error:', err);
            throw new Error('ProjectRepository.getProject - Internal Server Error');
        }
    }

    async createProject(data: Project) {
        try {
            const newProject = await this.prismaClient.project.create({
                data: {
                    name: data.name,
                    supply: data.supply,
                    allocated_allowlist_amount: data.allocatedAllowlistAmount,
                    description: data.description,
                    twitter_handle: data.twitterHandle,
                    discord_url: data.discordUrl,
                    opensea_url: data.openseaUrl,
                    presale_datetime: data.presaleDatetime,
                    public_sale_datetime: data.publicSaleDatetime,
                    has_allow_list: data.hasAllowList,
                    is_revealed: data.isRevealed,
                    project_state: data.projectState,
                    mint_price: data.mintPrice,
                    max_mint_per_transaction: data.maxMintPerTransaction,
                },
            });

            console.dir(newProject, { depth: null });

            return newProject;
        } catch (err) {
            console.log('ProjectRepository.createProject error:', err);
            throw new Error('ProjectRepository.createProject - Internal Server Error');
        }
    }

    async updateProject(id: number, data: Project) {
        try {
            const updatedProject = await this.prismaClient.project.update({
                where: { project_id: id },
                data: {
                    name: data.name,
                    supply: data.supply,
                    allocated_allowlist_amount: data.allocatedAllowlistAmount,
                    description: data.description,
                    twitter_handle: data.twitterHandle,
                    discord_url: data.discordUrl,
                    opensea_url: data.openseaUrl,
                    presale_datetime: data.presaleDatetime,
                    public_sale_datetime: data.publicSaleDatetime,
                    has_allow_list: data.hasAllowList,
                    is_revealed: data.isRevealed,
                    project_state: data.projectState,
                    mint_price: data.mintPrice,
                    max_mint_per_transaction: data.maxMintPerTransaction,
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
                where: { project_id: id },
            });

            console.dir(deletedProject, { depth: null });

            return deletedProject;
        } catch (err) {
            console.log('ProjectRepository.deleteProject error:', err);
            throw new Error('ProjectRepository.deleteProject - Internal Server Error');
        }
    }
}

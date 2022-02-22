import { Project } from '../interfaces/Project';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { serializeDatetime } from '../util/datetime-serializer';

export class ProjectService {
    constructor(private projectRepository: ProjectRepository) {}

    async getProjects(userId: number) {
        try {
            const projects = await this.projectRepository.getProjects(userId);

            return projects;
        } catch (err) {
            console.log('ProjectService.getProjects Error:', err);
            throw new Error('ProjectService.getProjects - Internal Server Error');
        }
    }

    async getProject(userId: number, projectId: number) {
        try {
            const project = await this.projectRepository.getProject(userId, projectId);

            return project;
        } catch (err) {
            console.log('ProjectService.getProject Error:', err);
            throw new Error('ProjectService.getProject - Internal Server Error');
        }
    }

    async createProject(userId: number, projectData: Project) {
        const cleanedProjectData: Project = {
            ...projectData,
            supply: projectData.supply ? Number(projectData.supply) : undefined,
            totalAllowlistSpots: projectData.totalAllowlistSpots
                ? Number(projectData.totalAllowlistSpots)
                : undefined,
            allocatedAllowlistAmount: projectData.allocatedAllowlistAmount
                ? Number(projectData.allocatedAllowlistAmount)
                : undefined,
            maxMintPerTransaction: projectData.maxMintPerTransaction
                ? Number(projectData.maxMintPerTransaction)
                : undefined,
            presaleDatetime: serializeDatetime(projectData.presaleDatetime),
            publicSaleDatetime: serializeDatetime(projectData.publicSaleDatetime),
            revealDatetime: serializeDatetime(projectData.revealDatetime),
            isRevealed: projectData.isRevealed ? Boolean(projectData.isRevealed) : undefined,
            hasAllowList: projectData.hasAllowList ? Boolean(projectData.hasAllowList) : undefined,
        };

        try {
            const project = await this.projectRepository.createProject(userId, cleanedProjectData);

            return project;
        } catch (err) {
            console.log('ProjectService.createProject Error:', err);
            throw new Error('ProjectService.createProject - Internal Server Error');
        }
    }

    async updateProject(id: number, projectData: Project) {
        const cleanedProjectData: Project = {
            ...projectData,
            supply: projectData.supply ? Number(projectData.supply) : undefined,
            totalAllowlistSpots: projectData.totalAllowlistSpots
                ? Number(projectData.totalAllowlistSpots)
                : undefined,
            allocatedAllowlistAmount: projectData.allocatedAllowlistAmount
                ? Number(projectData.allocatedAllowlistAmount)
                : undefined,
            maxMintPerTransaction: projectData.maxMintPerTransaction
                ? Number(projectData.maxMintPerTransaction)
                : undefined,
            presaleDatetime: serializeDatetime(projectData.presaleDatetime),
            publicSaleDatetime: serializeDatetime(projectData.publicSaleDatetime),
            revealDatetime: serializeDatetime(projectData.revealDatetime),
            isRevealed: projectData.isRevealed ? Boolean(projectData.isRevealed) : undefined,
            hasAllowList: projectData.hasAllowList ? Boolean(projectData.hasAllowList) : undefined,
        };

        try {
            const project = await this.projectRepository.updateProject(id, cleanedProjectData);

            return project;
        } catch (err) {
            console.log('ProjectService.updateProject Error:', err);
            throw new Error('ProjectService.updateProject - Internal Server Error');
        }
    }

    async deleteProject(id: number) {
        try {
            const deletedProject = await this.projectRepository.deleteProject(id);

            return deletedProject;
        } catch (err) {
            console.log('ProjectService.deleteProject Error:', err);
            throw new Error('ProjectService.deleteProject - Internal Server Error');
        }
    }
}

import { Project } from '../interfaces/Project';
import { ProjectRepository } from '../repositories/ProjectRepository';

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
        try {
            const project = await this.projectRepository.createProject(userId, projectData);

            return project;
        } catch (err) {
            console.log('ProjectService.createProject Error:', err);
            throw new Error('ProjectService.createProject - Internal Server Error');
        }
    }

    async updateProject(id: number, data: Project) {
        try {
            const project = await this.projectRepository.updateProject(id, data);

            return project;
        } catch (err) {
            console.log('ProjectService.createProject Error:', err);
            throw new Error('ProjectService.createProject - Internal Server Error');
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

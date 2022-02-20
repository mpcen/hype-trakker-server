import { UserProject } from '../interfaces/UserProject';
import { UserProjectRepository } from '../repositories/UserProjectRepository';

export class UserProjectService {
    constructor(private userProjectRepository: UserProjectRepository) {}

    async getUserProjects() {
        try {
            const userProjects = await this.userProjectRepository.getUserProjects();

            return userProjects;
        } catch (err) {
            console.log('UserProjectService.getUserProjects Error:', err);
            throw new Error('UserProjectService.getUserProjects - Internal Server Error');
        }
    }

    async getUserProject(userId: number, projectId: number) {
        try {
            const userProject = await this.userProjectRepository.getUserProject(userId, projectId);

            return userProject;
        } catch (err) {
            console.log('UserProjectService.getUserProject Error:', err);
            throw new Error('UserProjectService.getUserProject - Internal Server Error');
        }
    }

    async createUserProject(userId: number, projectId: number) {
        try {
            const userProject = await this.userProjectRepository.createUserProject(
                userId,
                projectId
            );

            return userProject;
        } catch (err) {
            console.log('UserProjectService.createUserProject Error:', err);
            throw new Error('UserProjectService.createUserProject - Internal Server Error');
        }
    }

    async deleteUserProject(userId: number, projectId: number) {
        try {
            const deletedProject = await this.userProjectRepository.deleteUserProject(
                userId,
                projectId
            );

            return deletedProject;
        } catch (err) {
            console.log('ProjectService.deleteUserProject Error:', err);
            throw new Error('ProjectService.deleteUserProject - Internal Server Error');
        }
    }
}

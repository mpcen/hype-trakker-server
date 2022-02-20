import { PrismaClient } from '@prisma/client';

export class UserProjectRepository {
    constructor(private prismaClient: PrismaClient) {}

    async getUserProjects() {
        try {
            const userProjects = await this.prismaClient.userProject.findMany();

            return userProjects;
        } catch (err) {
            console.log('UserProjectRepository.getUserProjects error:', err);
            throw new Error('UserProjectRepository.getUserProjects - Internal Server Error');
        }
    }

    async getUserProject(userId: number, projectId: number) {
        try {
            const userProject = await this.prismaClient.userProject.findFirst({
                where: {
                    user_id: userId,
                    project_id: projectId,
                },
            });

            if (!userProject) {
                return null;
            }

            return userProject;
        } catch (err) {
            console.log('UserProjectRepository.getUserProject error:', err);
            throw new Error('UserProjectRepository.getUserProject - Internal Server Error');
        }
    }

    async createUserProject(userId: number, projectId: number) {
        try {
            const userProject = await this.prismaClient.userProject.create({
                data: {
                    user_id: userId,
                    project_id: projectId,
                },
            });

            console.dir(userProject, { depth: null });

            return userProject;
        } catch (err) {
            console.log('UserProjectRepository.createUserProject error:', err);
            throw new Error('UserProjectRepository.createUserProject - Internal Server Error');
        }
    }

    async deleteUserProject(userId: number, projectId: number) {
        try {
            const deletedProject = await this.prismaClient.userProject.delete({
                where: {
                    user_id_project_id: {
                        user_id: userId,
                        project_id: projectId,
                    },
                },
            });

            console.dir(deletedProject, { depth: null });

            return deletedProject;
        } catch (err) {
            console.log('UserProjectRepository.deleteUserProject error:', err);
            throw new Error('UserProjectRepository.deleteUserProject - Internal Server Error');
        }
    }
}

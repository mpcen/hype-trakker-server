import { PrismaClient } from '@prisma/client';

import { User } from '../interfaces/User';

export class UserRepository {
    constructor(private prismaClient: PrismaClient) {}

    async getUsers() {
        try {
            const users = await this.prismaClient.user.findMany();

            return users;
        } catch (err) {
            console.log('UserRepository.getUsers error:', err);
            throw new Error('UserRepository.getUsers - Internal Server Error');
        }
    }

    async getUserById(id: number) {
        try {
            const user = await this.prismaClient.user.findFirst({
                where: {
                    user_id: id,
                },
            });

            if (!user) {
                return null;
            }

            return user;
        } catch (err) {
            console.log('UserRepository.getUserById error:', err);
            throw new Error('UserRepository.getUserById - Internal Server Error');
        }
    }

    async getUserByAddress(address: string) {
        try {
            const user = await this.prismaClient.user.findFirst({
                where: { address },
            });

            if (!user) {
                return null;
            }

            return user;
        } catch (err) {
            console.log('UserRepository.getUserByAddress error:', err);
            throw new Error('UserRepository.getUserByAddress - Internal Server Error');
        }
    }

    async createUser(data: User) {
        try {
            const newUser = await this.prismaClient.user.create({
                data: {
                    address: data.address,
                    user_name: data.userName,
                    nonce: data.nonce,
                    avatar_url: data.avatarUrl,
                },
            });

            console.dir(newUser, { depth: null });

            return newUser;
        } catch (err) {
            console.log('UserRepository.createUser error:', err);
            throw new Error('UserRepository.createUser - Internal Server Error');
        }
    }

    async updateUser(id: number, data: User) {
        try {
            const updatedUser = await this.prismaClient.user.update({
                where: { user_id: id },
                data: {
                    address: data.address,
                    user_name: data.userName,
                    nonce: data.nonce,
                    avatar_url: data.avatarUrl,
                },
            });

            console.dir(updatedUser, { depth: null });

            return updatedUser;
        } catch (err) {
            console.log('UserRepository.updateUser error:', err);
            throw new Error('UserRepository.updateUser - Internal Server Error');
        }
    }

    async deleteUser(id: number) {
        try {
            const deletedUser = await this.prismaClient.user.delete({
                where: { user_id: id },
            });

            console.dir(deletedUser, { depth: null });

            return deletedUser;
        } catch (err) {
            console.log('UserRepository.updateUser error:', err);
            throw new Error('UserRepository.updateUser - Internal Server Error');
        }
    }
}

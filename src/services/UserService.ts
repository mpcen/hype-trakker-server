import { User } from '../interfaces/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
    constructor(private userRepository: UserRepository) {}

    async getUsers() {
        try {
            const users = await this.userRepository.getUsers();

            return users;
        } catch (err) {
            console.log('UserService.getProjects Error:', err);
            throw new Error('UserService.getProjects - Internal Server Error');
        }
    }

    async getUserById(id: number) {
        try {
            const user = await this.userRepository.getUserById(id);

            return user;
        } catch (err) {
            console.log('UserService.getUserById Error:', err);
            throw new Error('UserService.getUserById - Internal Server Error');
        }
    }

    async getUserByAddress(address: string) {
        try {
            const user = await this.userRepository.getUserByAddress(address);

            return user;
        } catch (err) {
            console.log('UserService.getUserByAddress Error:', err);
            throw new Error('UserService.getUserByAddress - Internal Server Error');
        }
    }

    async createUser(address: string) {
        try {
            const userExists = await this.userRepository.getUserByAddress(address);

            if (userExists) {
                throw new Error('User already exists');
            }

            const newUser = await this.userRepository.createUser({
                address,
                nonce: Math.floor(Math.random() * 1000000),
            });

            return newUser;
        } catch (err) {
            throw new Error('Internal server error - createUser');
        }
    }

    async updateUser(id: number, data: User) {
        try {
            const user = await this.userRepository.updateUser(id, data);

            return user;
        } catch (err) {
            console.log('UserService.updateUser Error:', err);
            throw new Error('UserService.updateUser - Internal Server Error');
        }
    }

    async deleteUser(id: number) {
        try {
            const deletedUser = await this.userRepository.deleteUser(id);

            return deletedUser;
        } catch (err) {
            console.log('UserService.deleteUser Error:', err);
            throw new Error('UserService.deleteUser - Internal Server Error');
        }
    }
}

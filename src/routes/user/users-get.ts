import { Request, RequestHandler, Response } from 'express';
import { UserService } from '../../services/UserService';

export const getUsers = (userService: UserService): RequestHandler => {
    return async (_: Request, res: Response) => {
        try {
            const users = await userService.getUsers();

            res.send(users);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getAllUsers' });
        } finally {
        }
    };
};

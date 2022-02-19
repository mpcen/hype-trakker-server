import { Request, RequestHandler, Response } from 'express';

import { UserService } from '../../services/UserService';

export const getUserById = (userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { id } = req.params;

        try {
            const user = await userService.getUserById(Number(id));

            if (!user) {
                return res.status(404).json({ message: 'User not found', status: 404 });
            }

            res.send(user);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getUserById' });
        } finally {
        }
    };
};

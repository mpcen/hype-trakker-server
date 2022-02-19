import { Request, RequestHandler, Response } from 'express';

import { User } from '../../interfaces/User';
import { UserService } from '../../services/UserService';

export const updateUser = (userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;
        const data: User = req.body;

        try {
            const updatedUser = await userService.updateUser(Number(id), data);

            res.send(updatedUser);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createProject' });
        }
    };
};

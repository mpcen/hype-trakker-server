import { Request, RequestHandler, Response } from 'express';

import { UserService } from '../../services/UserService';

export const getUserByAddress = (userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { address } = req.params;

        try {
            const user = await userService.getUserByAddress(address);

            if (!user) {
                return res.status(404).json({ message: 'User not found', status: 404 });
            }

            res.send(user);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getUserByAddress' });
        } finally {
        }
    };
};

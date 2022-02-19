import { Request, RequestHandler, Response } from 'express';

import { UserService } from '../../services/UserService';

export const deleteUser = (userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const id = req.params.id;

        try {
            const deletedUser = await userService.deleteUser(Number(id));

            res.send(deletedUser);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - deleteUser' });
        } finally {
        }
    };
};

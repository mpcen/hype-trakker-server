import { Request, RequestHandler, Response } from 'express';

import { UserService } from '../../services/UserService';

export const createUser = (userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { address } = req.body;

        if (!address) {
            return res
                .status(400)
                .json({ message: 'You must provide an address for the new user' });
        }

        try {
            const newUser = await userService.createUser(address);

            res.send(newUser);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - createUser' });
        }
    };
};

import { Request, RequestHandler, Response } from 'express';

import { AuthUserSignature } from '../../interfaces/Auth';
import { AuthService } from '../../services/AuthService';
import { UserService } from '../../services/UserService';

export const authUser = (authService: AuthService, userService: UserService): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { address, signature }: AuthUserSignature = req.body;

        if (!address || !signature) {
            return res
                .status(400)
                .json({ message: 'You must provide an address and signature for authentication' });
        }

        try {
            const user = await userService.getUserByAddress(address);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            const token = await authService.authenticate(user, signature);

            res.send(token);
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - authUser' });
        }
    };
};

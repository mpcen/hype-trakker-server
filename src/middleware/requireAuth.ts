import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

import { RequestCustom } from '../routes/express-types';

export const requireAuth = (req: RequestCustom, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {
        if (err) return res.sendStatus(403);

        req.user = decoded.payload;

        next();
    });
};

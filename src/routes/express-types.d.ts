import { Prisma } from '@prisma/client';
import { Request } from 'express';

export interface RequestCustom extends Request {
    user?: {
        id: number;
        address: string;
    };
}

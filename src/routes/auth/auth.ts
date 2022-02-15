import { PrismaClient } from '@prisma/client';
import { Request, RequestHandler, Response } from 'express';
import jwt from 'jsonwebtoken';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from 'eth-sig-util';

const { JWT_SECRET } = process.env;

export const auth = (prisma: PrismaClient): RequestHandler => {
    return async (req: Request, res: Response) => {
        const { address, signature } = req.body;

        if (!address || !signature) {
            return res.status(400).json({ message: 'You must provide an address and signature' });
        }

        try {
            let user = await prisma.user.findFirst({ where: { address: address as string } });

            if (!user) {
                user = await prisma.user.create({
                    data: {
                        address: address,
                        nonce: Math.floor(Math.random() * 1000000),
                    },
                });

                console.dir(user, { depth: null });
            }

            const msg = `I am signing my one-time nonce: ${user.nonce}. This signature will be used for authentication.`;
            const msgBufferHex = ethUtil.bufferToHex(Buffer.from(msg, 'utf8'));
            const addressFromSignature = sigUtil.recoverPersonalSignature({
                data: msgBufferHex,
                sig: signature,
            });

            if (addressFromSignature.toLowerCase() !== address.toLowerCase()) {
                return res.status(401).send({ error: 'Signature verification failed' });
            }

            await prisma.user.update({
                where: { address: address as string },
                data: {
                    nonce: Math.floor(Math.random() * 10000),
                },
            });

            jwt.sign(
                { payload: { id: user.id, address } },
                JWT_SECRET as string,
                (err: Error | null, token: string | undefined) => {
                    if (err) {
                        return res.status(400).json({ message: 'Error signing token' });
                    }

                    res.send(token);
                }
            );
        } catch (err) {
            return res.status(500).json({ message: 'Internal server error - getUser' });
        } finally {
        }
    };
};

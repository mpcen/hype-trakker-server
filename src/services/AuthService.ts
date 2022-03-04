import jwt from 'jsonwebtoken';
import * as ethUtil from 'ethereumjs-util';
import * as sigUtil from 'eth-sig-util';

import { UserRepository } from '../repositories/UserRepository';
import { User } from '@prisma/client';

const { JWT_SECRET } = process.env;

export class AuthService {
    constructor(private userRepository: UserRepository) {}

    async authenticate(user: User, signature: string) {
        await this.verifySignature(user, signature);
        await this.updateUserNonce(user);

        const token = await this.signJwt(user);

        return token;
    }

    private async verifySignature(user: User, clientSignature: string) {
        try {
            const serverSignature = `I am signing my one-time nonce: ${user.nonce}.\n\nThis signature will be used for authentication.\n\nNo transactions will ever be executed\nwithout your permission.`;
            const serverSignatureBufferHex = ethUtil.bufferToHex(
                Buffer.from(serverSignature, 'utf8')
            );
            const addressFromSignature = sigUtil.recoverPersonalSignature({
                data: serverSignatureBufferHex,
                sig: clientSignature,
            });

            if (addressFromSignature.toLowerCase() !== user.address.toLowerCase()) {
                throw new Error('Signature verification failed');
            }
        } catch (err) {
            throw new Error('Signature verification failed');
        }
    }

    async signJwt(user: User) {
        try {
            const token = new Promise<string | undefined>((resolve) =>
                jwt.sign(
                    { payload: { id: user.userId, address: user.address } },
                    JWT_SECRET as string,
                    (err: Error | null, token: string | undefined) => {
                        if (err) {
                            throw new Error('Error signing token');
                        }

                        resolve(token);
                    }
                )
            );

            return token;
        } catch (err) {
            throw new Error('Error while signing jwt');
        }
    }

    private async updateUserNonce(user: User) {
        try {
            await this.userRepository.updateUser(user.userId, {
                address: user.address,
                nonce: Math.floor(Math.random() * 10000),
            });
        } catch (err) {
            throw new Error('Error while updating user nonce');
        }
    }
}

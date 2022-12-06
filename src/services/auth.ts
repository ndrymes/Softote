import jwt from 'jsonwebtoken';
import moment from 'moment';
import { StandardError } from 'src/libs/standard-error';
import { JWT_TOKEN_SECRET } from 'src/configs/app';
import { ErrorCodes } from 'src/domain/errors';

export class AuthService {
    login(clientId: string, clientToken: string) {
        try {
            const FIXEDCLIENTID = '744c28de-a0za-491a-bf08-b613797f7665';
            const FIXEDCLIENTTOKEN = '8Tf8Q~3IAfEJsr-BR2Td.u5RJTpUUcVZc-bdfVS';
            if (clientId !== FIXEDCLIENTID || clientToken !== FIXEDCLIENTTOKEN) {
                throw new Error('invalid token');
            }

            const expiryTime = moment().add('30', 'minutes');
            const userPayload = { FIXEDCLIENTID, FIXEDCLIENTTOKEN };
            const token = jwt.sign(userPayload, JWT_TOKEN_SECRET, {
                expiresIn: expiryTime.diff(moment(), 'seconds')
            });

            return { token };
        } catch (error) {
            throw new StandardError(ErrorCodes.INVALID_ID, 'Invalid clientId or Secret');
        }
    }
}

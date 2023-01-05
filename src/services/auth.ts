import jwt from 'jsonwebtoken';
import moment from 'moment';
import { StandardError } from 'src/libs/standard-error';
import { JWT_TOKEN_SECRET } from 'src/configs/app';
import { ErrorCodes } from 'src/domain/errors';
import CONSTANTS from 'src/constants';

const {
    moment: { THIRTY }
} = CONSTANTS;

interface RegisterPayload {
    businessName: string;
    phoneNumber: string;
    email: string;
    password: string;
}

export class AuthService {
    register(registerPayload: RegisterPayload) {}

    login(clientId: string, clientToken: string) {
        try {
            const FIXEDCLIENTID = '744c28de-a0za-491a-bf08-b613797f7665';
            const FIXEDCLIENTTOKEN = '8Tf8Q~3IAfEJsr-BR2Td.u5RJTpUUcVZc-bdfVS';
            if (clientId !== FIXEDCLIENTID || clientToken !== FIXEDCLIENTTOKEN) {
                console.log('hnmm');
                
                throw new Error('invalid token');
            }

            const expiryTime = moment().add(THIRTY, 'minutes');
            const token = jwt.sign({ FIXEDCLIENTID, FIXEDCLIENTTOKEN }, JWT_TOKEN_SECRET, {
                expiresIn: expiryTime.diff(moment(), 'seconds')
            });

            return { token };
        } catch (error) {
            throw new StandardError(ErrorCodes.INVALID_ID, 'Invalid clientId or Secret');
        }
    }
}

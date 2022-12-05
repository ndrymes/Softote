import { StandardError } from 'src/libs/standard-error';
import { ErrorCodes } from 'src/domain/errors';

export interface IdentityServices {
    bvnCheck: (bvn: string) => any;
}

export class YouVerifyService implements IdentityServices {
    async bvnCheck(bvn: string) {
        //get connection
        //call youverify api

        console.log('here');

        try {
            return {
                id: '627293d3837f90811fd3d9ba',
                parentId: 'paretId',
                status: 'found',
                dataValidation: false,
                selfieValidation: false,
                firstName: 'John',
                lastName: 'Doe',
                mobile: '08031234567',
                dateOfBirth: '1988-04-04',
                isConsent: true,
                idNumber: '11111111111',
                shouldRetrivedNin: false,
                businessId: '6222a5ed3e7a41c29c031ecc',
                type: 'bvn',
                gender: '',
                requestedAt: '2022-05-04T14:55:15.395Z',
                requestedById: '6222a5ed3e7a41c29c031ece',
                country: 'NG',
                createdAt: '2022-05-04T14:55:15.402Z',
                lastModifiedAt: '2022-05-04T14:55:15.402Z'
            };
        } catch (error) {
            throw new StandardError(ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }
}

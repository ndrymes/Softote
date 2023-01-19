/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { StandardError } from 'src/libs/standard-error';
import { ErrorCodes } from 'src/domain/errors';

import { IidentityServices } from 'src/services/identity/interfaces';

export class AppruveService implements IidentityServices{

  async getUserDataWithTIN( tin: string ){

    // get connection
    // call youverify api

    try{

      return {
        id:                '627293d3837f90811fd3d9ba',
        parentId:          'paretId',
        status:            'found',
        dataValidation:    false,
        selfieValidation:  false,
        firstName:         'John',
        lastName:          'Doe',
        mobile:            '08031234567',
        dateOfBirth:       '1988-04-04',
        isConsent:         true,
        idNumber:          '11111111111',
        shouldRetrivedNin: false,
        businessId:        '6222a5ed3e7a41c29c031ecc',
        type:              'tin',
        gender:            '',
        requestedAt:       '2022-05-04T14:55:15.395Z',
        requestedById:     '6222a5ed3e7a41c29c031ece',
        country:           'NG',
        createdAt:         '2022-05-04T14:55:15.402Z',
        lastModifiedAt:    '2022-05-04T14:55:15.402Z'
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }


  }

}

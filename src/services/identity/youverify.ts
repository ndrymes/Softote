/* eslint-disable no-unused-vars */
/* eslint-disable no-unreachable */
import { StandardError } from 'src/libs/standard-error';
import { ErrorCodes } from 'src/domain/errors';

export interface IdentityServices {
    getUserDataWithBvn: ( bvn: string ) => any;
    getUserDataWithNIN: ( nin: string ) => any;
    getUserDataWithPassportId :( passportId: string ) => any;
    getUserDataWithDriversLicence :( licenseId: string ) => any;
    getUserDataWithPhoneNumber: ( nin: number ) => any;
    getUserDataWithAccountNumber: ( nin: number ) => any;
}

export class YouVerifyService implements IdentityServices{

  async getUserDataWithBvn( bvn: string ){

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
        type:              'bvn',
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

  async getUserDataWithNIN( nin: string ){

    // get connection
    // call youverify api

    try{

      return {
        dataValidation:      true,
        selfieValidation:    false,
        firstName:           'PROUD',
        middleName:          'NIGERIAN',
        lastName:            'CITIZEN',
        image:               'data:image/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAopJQgf/2Q==',
        mobile:              '2341234567890',
        mobileIntFormat:     '2341234567890',
        agentId:             'ABCDEF-8910',
        vNINUserId:          'ABCDEF-8910',
        dateOfBirth:         '1960-10-01',
        vNIN:                'YV111111111111FY',
        isConsent:           true,
        idNumber:            'YV111111111111FY',
        businessId:          '6222a5ea3e7a41c29c030fac',
        type:                'vnin',
        allValidationPassed: false,
        gender:              'male',
        requestedAt:         '2022-11-21T21:34:44.109Z',
        requestedById:       '6222a5ea3e7a41c29c030fad',
        country:             'NG',
        createdAt:           '2022-11-21T21:34:44.124Z',
        lastModifiedAt:      '2022-11-21T21:34:44.124Z',
        metadata:            {},
        requestedBy:         {
          firstName:  'API',
          lastName:   'User',
          middleName: '',
          id:         '6222a5ea3e7a41c29c030fad'
        },
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

  async getUserDataWithPassportId( passportId: string ){

    // get connection
    // call youverify api

    try{

      return {

        id:                 '6272878bc1b2b7d34799190b',
        dataValidation:     false,
        selfieValidation:   false,
        firstName:          'Sarah',
        middleName:         'Jane',
        lastName:           'Doe',
        expiredDate:        '2032-01-31T00:00:00.000Z',
        notifyWhenIdExpire: false,
        issuedAt:           'MINNA',
        issuedDate:         '2022-02-01T00:00:00.000Z',
        dateOfBirth:        '1988-04-04',
        isConsent:          true,
        idNumber:           'A11111111',
        businessId:         '6222a5ed3e7a41c29c031ecc',
        type:               'passport',
        gender:             'female',
        requestedAt:        '2022-05-04T14:02:51.860Z',
        requestedById:      '6222a5ed3e7a41c29c031ece',
        country:            'NG',
        createdAt:          '2022-05-04T14:02:51.932Z',
        lastModifiedAt:     '2022-05-04T14:02:51.932Z',
        requestedBy:        {
          firstName:  'API',
          lastName:   'User',
          middleName: '',
          id:         '6222a5ed3e7a41c29c031ece'
        },
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

  async getUserDataWithDriversLicence( licenseId: string ){

    // get connection
    // call youverify api

    try{

      return {

        id:                 '62728ddd837f90413ed3d99c',
        status:             'found',
        dataValidation:     false,
        selfieValidation:   false,
        firstName:          'John',
        lastName:           'Doe',
        expiredDate:        '2023-11-09T00:00:00.000Z',
        issuedDate:         '2020-06-12T00:00:00.000Z',
        stateOfIssuance:    'BENUE',
        notifyWhenIdExpire: false,
        dateOfBirth:        '1988-04-04',
        isConsent:          true,
        idNumber:           'AAA00000AA00',
        businessId:         '6222a5ed3e7a41c29c031ecc',
        type:               'ndl',
        gender:             'female',
        requestedAt:        '2022-05-04T14:29:49.329Z',
        requestedById:      '6222a5ed3e7a41c29c031ece',
        country:            'NG',
        createdAt:          '2022-05-04T14:29:49.347Z',
        lastModifiedAt:     '2022-05-04T14:29:49.347Z',
        requestedBy:        {
          firstName:  'API',
          lastName:   'User',
          middleName: '',
          id:         '6222a5ed3e7a41c29c031ece'
        },

      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

  async getUserDataWithPhoneNumber( phoneNumber: number ){

    // get connection
    // call youverify api

    try{

      return {

        id:               '6284b09f7bf17937bc7ad87a',
        status:           'not_found',
        reason:           'ID data not found',
        dataValidation:   false,
        selfieValidation: false,
        firstName:        'John',
        middleName:       'Doe',
        isConsent:        true,
        idNumber:         '00A0A0A000000000100',
        businessId:       '6222a5ed3e7a41c29c031ecc',
        type:             'phone',
        requestedAt:      '2022-05-18T08:38:57.392Z',
        requestedById:    '6222a5ed3e7a41c29c031ece',
        country:          'NG',
        createdAt:        '2022-05-18T08:38:57.468Z',
        lastModifiedAt:   '2022-05-18T08:38:57.468Z',
        requestedBy:      {
          firstName:  'API',
          lastName:   'User',
          middleName: '',
          id:         '6222a5ed3e7a41c29c031ece'

        },
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

  async getUserDataWithAccountNumber( accountNumber: number ){

    // get connection
    // call youverify api

    try{

      return {
        id:               '6284b245c1f36651d41dc6f3',
        dataValidation:   false,
        selfieValidation: false,
        isConsent:        true,
        idNumber:         '1000000000',
        businessId:       '6222a5ed3e7a41c29c031ecc',
        bankDetails:      {
          accountName:   'MICHAEL JOHN DOE',
          accountNumber: '1000000000',
          bankName:      'Guaranty Trust Bank'
        },
        type:           'bav',
        requestedAt:    '2022-05-18T08:45:58.066Z',
        requestedById:  '6222a5ed3e7a41c29c031ece',
        country:        'NG',
        createdAt:      '2022-05-18T08:45:58.079Z',
        lastModifiedAt: '2022-05-18T08:45:58.079Z',
        requestedBy:    {
          firstName:  'API',
          lastName:   'User',
          middleName: '',
          id:         '6222a5ed3e7a41c29c031ece'

        },
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

}

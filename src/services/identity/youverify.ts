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
    getUserDataWithCAC:( registrationNumber: string )=> any
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

  async getUserDataWithCAC( registrationNumber: string ){

    // get connection
    // call youverify api

    try{

      return {

        name:                  'John Doe Inc',
        registrationNumber:    '00000000',
        registryNumber:        '0000000000',
        vatNumber:             '00000000000',
        registrationDate:      '2017-09-27T00:00:00.000Z',
        dateDisolved:          '2020-10-31T00:00:00.000Z',
        email:                 'johnfakedoe@gmail.com',
        phone:                 '+1 000 000 0000',
        typeOfEntity:          'Public Limited Company',
        address:               '35 Oak Street, Suite 304, Toronto, ON, M9N 1A1',
        status:                'found',
        companyStatus:         'Dissolved',
        isConsent:             true,
        lastUpdatedAt:         '2022-02-24T13:53:22.800Z',
        parentCountry:         'Nigeria',
        companyContactPersons: [
          {
            contacts: {
              email: [
                'dlg_grdnr7@yahoo.com'
              ],
              phone: [
                '+1 000 000 0000'
              ]
            },
            name: 'Donald Gardner'
          }
        ],
        country:      'Nigeria',
        countryCode:  'NG',
        keyPersonnel: [
          {
            name:               'John Doe',
            designation:        'Director',
            appointedOn:        '2012-09-01',
            resignedOn:         '2019-09-01',
            occupation:         'Professor',
            nationality:        'Canadian',
            birthYear:          '1960',
            birthMonth:         '5',
            birthDate:          '1',
            address:            '123 fake street 10213 Yaba Lagos Nigeria',
            countryOfResidence: 'Nigeria',
            number:             'International Passport',
            isForeign:          false,
            documentNumber:     'A00000000',
            email:              'fakeemail@gmail.com',
            phone:              '08000000000',
            companies:          [
              {
                name:          'John Doe LTD',
                companyNumber: '000000',
                countryCode:   'NG'
              },
              {
                name:          'John Fake Doe LTD',
                companyNumber: '00000000',
                countryCode:   'NG'
              }
            ]
          }
        ],
        activities: [
          {
            activity: 'Manufacture of basic pharmaceutical products',
            type:     'Primary'
          },
          {
            activity: 'Manufacture of pharmaceutical preparations',
            type:     'Secondary'
          },
          {
            activity: 'Wholesale of pharmaceutical goods',
            type:     'Secondary'
          },
          {
            activity: 'Research and experimental development on biotechnology',
            type:     'Secondary'
          }
        ],
        legalEntityIdentifierRegister: [
          {
            leiCode:                             '0000000000000000',
            legalName:                           'John Doe PLC',
            legalAddressFirstAddressLine:        '1 FAKE CRICK AVENUE',
            legalAddressAdditionalAddressLine1:  'CAMBRIDGE BIOMEDICAL CAMPUS',
            legalAddressAdditionalAddressLine2:  '',
            legalAddressAdditionalAddressLine3:  '',
            legalAddressCity:                    'CAMBRIDGE',
            legalAddressRegion:                  'GB-CAM',
            legalAddressCountry:                 'GB',
            legalAddressPostalCode:              'CB2 0AA',
            registrationAuthorityID:             'R0000000',
            registrationAuthorityEntityID:       '00000000',
            legalJurisdiction:                   'GB',
            entityCategory:                      'GENERAL',
            registrationInitialRegistrationDate: '2012-06-06',
            registrationLastUpdateDate:          '2021-08-21',
            registrationNextRenewalDate:         '2022-08-11',
            registrationManagingLOU:             '0000000000000000',
            registrationValidationSources:       'FULLY_CORROBORATED',
            validationAuthorityID:               'RA000000',
            validationAuthorityEntityID:         '02700000',
            entityStatus:                        'ACTIVE',
            status:                              'ISSUED'
          }
        ],
        centralIndexKeyRegister: [
          {
            cik:             '000000',
            entityType:      'operating',
            sic:             '3711',
            sicDescription:  'Motor Vehicles & Passenger Car Bodies',
            name:            'John Doe, Inc.',
            ein:             '000000000000',
            description:     '',
            website:         '',
            investorWebsite: '',
            tickers:         [
              'JDL'
            ],
            stateOfIncorporation:                     'DE',
            businessAddressStreet1:                   '3500 FAKE STREET RD',
            mailingAddressCity:                       'PALO ALTO',
            businessAddressCity:                      'PALO ALTO',
            businessAddressStateOrCountry:            'CA',
            businessAddressZipCode:                   '123454',
            businessAddressStateOrCountryDescription: 'CA',
            phone:                                    '000-000-0000',
            _id:                                      '630ac466a4da96dee1fcae97',
            formerNames:                              [
              {
                from: '2005-02-17T00:00:00.000Z',
                to:   '2017-01-27T00:00:00.000Z',
                name: 'JDL MOTORS INC',
                _id:  '630ac466a4da96dee1fcae98'
              }
            ]
          }
        ],
        filings: [
          {
            date: '2020-10-31',
            name: 'Dissolution',
            type: 'Dissolution',
          },
          {
            date: '2017-09-27',
            name: 'Incorporation',
            type: 'Incorporation',
          }
        ],
        createdAt:      '2022-08-26T14:40:00.010Z',
        lastModifiedAt: '2022-08-26T14:40:00.010Z',
        affiliates:     [
          {
            name:          'John Doe 1',
            companyNumber: '0000.000.000',
            countryCode:   'NG'
          },
          {
            name:          'John Doe 2',
            companyNumber: '0000.000.0000',
            countryCode:   'NG'
          }
        ],
        businessId:      '61d880f1e8e15aaf24558f1a',
        type:            'advance_company_check',
        requestedAt:     '2022-08-28T23:54:38.896Z',
        requestedById:   '61d880f2e8e15aaf24558f9b',
        searchTerm:      '00000000',
        _createdAt:      '2022-08-26T15:40:000+01:00',
        _lastModifiedAt: '2022-08-26T15:40:000+01:00',
        id:              '630c003d671ad95daae37cc6',
        requestedBy:     {
          firstName:  'Famous',
          lastName:   'Ehichioya',
          middleName: 'Prior',
          id:         '61d880f2e8e15aaf24558f9b'
        }
        ,
      };

    } catch( error ){

      throw new StandardError( ErrorCodes.INTERNAL_SERVER_ERROR, 'Internal Server Error' );

    }

  }

}

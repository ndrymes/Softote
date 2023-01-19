/* eslint-disable no-unused-vars */

export interface IidentityServices {
    getUserDataWithBvn? : ( bvn: string ) => any;
    getUserDataWithNIN ? : ( nin: string ) => any;
    getUserDataWithTIN? : ( tin: string ) => any;
    getUserDataWithPassportId? :( passportId: string ) => any;
    getUserDataWithDriversLicence? :( licenseId: string ) => any;
    getUserDataWithPhoneNumber? ( nin: number ):any;
    getUserDataWithAccountNumber? : ( nin: number ) => any;
    getUserDataWithCAC? :( registrationNumber: string )=> any
    createCandidateByIdentity? :( type: string, idNumber:string )=> any
    verifyCandidatesAddress? :( candidateId: string, description:string, address:any )=> any
}

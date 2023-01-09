import { Request, Response, Router, NextFunction } from 'express';

import { validateBody } from "src/libs/validator";

import bvnCheckSchema from 'src/schemas/bvncheck.schema.json'
import ninCheckSchema from 'src/schemas/ninCheck.schema.json'
import passportCheckSchema from 'src/schemas/passportCheck.schema.json'
import driversLicenseCheckSchema from 'src/schemas/driversLicenseCheck.schema.json'
import phoneNumberCheckSchema from 'src/schemas/phoneNumberCheck.schema.json'
import accountNumberCheckSchema from 'src/schemas/accountNumberCheck.schema.json'
import companyCheckSchema from 'src/schemas/companyCheck.shema.json'

import { identityServices } from 'src/services/identity';
import { IdentityServices } from 'src/services/identity/youverify';
import { handleTokenAuthorization } from 'src/middlewares/handle-Token-authorization';

export class IdentityController {
    private router: Router;
    constructor() {
        this.router = Router();
        this.router.post('/identity/ng/bvn', handleTokenAuthorization(), this.bvnCheck.bind(this));
        this.router.post('/identity/ng/vnin', handleTokenAuthorization(), this.getUserDataWithNIN.bind(this));
        this.router.post('/identity/ng/passport', handleTokenAuthorization(), this.getUserDataWithPassportId.bind(this));
        this.router.post('/identity/ng/drivers-license', handleTokenAuthorization(), this.getUserDataWithDriversLicence.bind(this));
        this.router.post('/identity/ng/phone', handleTokenAuthorization(), this.getUserDataWithPhoneNumber.bind(this));
        this.router.post('/identity/ng/bank-account-number', handleTokenAuthorization(), this.getUserDataWithAccountNumber.bind(this));
        this.router.post('/identity/ng/company-check', handleTokenAuthorization(), this.getUserDataWithCAC.bind(this));

        
    }

    getRouter(): Router {
        return this.router;
    }

    public async bvnCheck(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { bvn } = req.body;
            validateBody(req.body, bvnCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithBvn(bvn);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

    public async getUserDataWithNIN(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { vnin } = req.body;
            validateBody(req.body, ninCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithNIN(vnin);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

     public async getUserDataWithPassportId(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { passportId } = req.body;
            validateBody(req.body, passportCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithPassportId(passportId);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

     public async getUserDataWithDriversLicence(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { licenseId } = req.body;
            validateBody(req.body, driversLicenseCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithDriversLicence(licenseId);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

     public async getUserDataWithPhoneNumber(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { phoneNumber } = req.body;
            validateBody(req.body, phoneNumberCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithPhoneNumber(phoneNumber);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

     public async getUserDataWithAccountNumber(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { accountNumber } = req.body;
            validateBody(req.body, accountNumberCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithAccountNumber(accountNumber);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

     public async getUserDataWithCAC(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { registrationNumber } = req.body;
            validateBody(req.body, companyCheckSchema)

            const service = await this.getService('youVerifyService');
            const userData = await service.getUserDataWithCAC(registrationNumber);
            res.status(200).send({
                status: true,
                data: userData
            });
        } catch (error) {
            return next(error);
        }
    }

    public async getService(serviceName: string): Promise<IdentityServices> {
        const service = identityServices[serviceName as keyof typeof identityServices];
        return new service();
    }

    public async getRequestBody(serviceName: string): Promise<Response | void> {
        const service = {}[serviceName];
        return service;
    }
}

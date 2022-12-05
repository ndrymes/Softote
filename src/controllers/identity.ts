import { Request, Response, Router, NextFunction } from 'express';

import { StandardError } from 'src/libs/standard-error';
import { ErrorCodes } from 'src/domain/errors';

import { identityServices } from 'src/services/identity';
import { IdentityServices } from 'src/services/identity/youverify';
import { handleTokenAuthorization } from 'src/middlewares/handle-Token-authorization';

export class IdentityController {
    private router: Router;
    constructor() {
        this.router = Router();
        this.router.post('/identity/ng/bvn', handleTokenAuthorization(), this.bvnCheck.bind(this));
    }

    getRouter(): Router {
        return this.router;
    }

    public async bvnCheck(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { bvn } = req.body;
            const isnum = /^\d+$/.test(bvn);
            //this should be a proper validation
            if (!bvn) throw new StandardError(ErrorCodes.API_VALIDATION_ERROR, 'Bvn is required');
            if (!isnum) throw new StandardError(ErrorCodes.API_VALIDATION_ERROR, 'Bvn must be a number');

            const service = await this.getService('youVerifyService');
            const userData = await service.bvnCheck(bvn);
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

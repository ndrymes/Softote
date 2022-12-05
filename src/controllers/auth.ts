import { Request, Response, Router, NextFunction } from 'express';

import { AuthService } from 'src/services/auth';

interface AuthControllerOptions {
    authService: AuthService;
}

export class AuthController {
    private router: Router;
    constructor(private readonly options: AuthControllerOptions) {
        this.router = Router();
        this.router.post('/login', this.login.bind(this));
    }

    getRouter(): Router {
        return this.router;
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
        try {
            const { clientId, clientSecret } = req.body;
            const token = this.options.authService.login(clientId, clientSecret);

            res.status(200).send({
                status: true,
                data: token
            });
        } catch (error) {
            return next(error);
        }
    }
}

import { Request, Response } from 'express'
import { ok } from '../../helpers';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { DetailUserService } from '../../../infra/sevices/user/DetailUserService';

class DetailUserController implements Controller {
    async handle(request: any): Promise<HttpResponse> {

        const user_id = request.user_id;
        const detailUserService = new DetailUserService();
        const user = await detailUserService.execute(user_id);

        return ok(user);

    }
}

export { DetailUserController }
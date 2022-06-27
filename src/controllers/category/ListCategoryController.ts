import { Request, Response } from 'express';
import { ok, serverError } from '../../helpers';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { ListCategoryService } from '../../sevices/category/ListCategoryService';

class ListCategoryController implements Controller {
    async handle(request: any): Promise<HttpResponse> {
        try {
            const listCategoryService = new ListCategoryService();
            const category = await listCategoryService.execute();
            return ok(category);

        } catch (error) {
            return serverError(error)
        }
    }
}

export { ListCategoryController }
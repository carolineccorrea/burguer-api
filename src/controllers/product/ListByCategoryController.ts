import { Request, Response } from 'express'
import { ok } from '../../helpers';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { ListByCategoryService } from '../../sevices/product/ListByCategoryService';

class ListByCategoryController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    const category_id  = request.query.category_id as string;
    const listByCategory = new ListByCategoryService();

    const productByCategory = await listByCategory.execute({ 
    category_id 
    })
    return ok(productByCategory)
  }
}

export { ListByCategoryController }

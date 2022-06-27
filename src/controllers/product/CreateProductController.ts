import { Request, Response } from 'express'
import { ok, serverError } from '../../helpers';
import { Controller } from '../../protocols/controller';
import { HttpResponse } from '../../protocols/http';
import { CreateProductService } from '../../sevices/product/CreateProductService';


class CreateProductController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { name, price, description, category_id } = request.body;

      const createProductService = new CreateProductService();

      if (!request.file) {
        throw new Error("error upload file")
      } else {

        const { originalname, filename: banner } = request.file;

        const product = await createProductService.execute({
          name,
          price,
          description,
          banner,
          category_id
        });

        return ok(product)
      }
    } catch (error) {
      return serverError(error)
    }
  }
}

export { CreateProductController }

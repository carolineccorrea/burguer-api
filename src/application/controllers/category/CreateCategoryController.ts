import { Router, Request, Response } from "express"
import { ok } from "../../helpers";
import { CreateCategoryService } from "../../../infra/sevices/category/CreateCategoryService"

class CreateCategoryController {
    async handle (req: Request, res: Response) {
       const { name } = req.body; 
       const createCategoryService = new CreateCategoryService();

        const category = await createCategoryService.execute({name});

        return ok(category);
    }
}

export { CreateCategoryController }
import { Router, Request, Response } from "express"
import { ok, serverError } from "../../helpers";
import { Controller } from "../../protocols/controller";
import { HttpResponse } from "../../protocols/http";
import { CreateUserService } from "../../sevices/user/CreateUserService";

class CreateUserController implements Controller {
  async handle(request: any): Promise<HttpResponse> {
    try {
      const { name, email, password } = request.body
      const createUserService = new CreateUserService();

      const newUser = await createUserService.execute({ name, email, password })
      return ok(newUser)
    } catch (error) {
      return serverError(error)
    }
  }
}

export { CreateUserController }
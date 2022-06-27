import { Request, Response } from 'express'
import { Controller } from '../protocols/controller'
import { HttpRequest } from '../protocols/http'

export const adaptRoute = (controller: any) => {
  return async (req: Request, res: Response) => {
    const httpRequest: HttpRequest = {
      body: req.body
    }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.body)
  }
}
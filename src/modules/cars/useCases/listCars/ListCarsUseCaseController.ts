import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarUseCase } from "./ListCarsUseCase";

class ListCarsController {
  async handle(request: Request, response: Response) {
    const listCarsUseCase = container.resolve(ListCarUseCase);

    const result = await listCarsUseCase.execute();

    response.json(result);
  }
}
export { ListCarsController };

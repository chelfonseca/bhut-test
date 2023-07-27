import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCarsLogsUseCase } from "./ListCarsLogsUseCase";

class ListCarsLogsController {
  async handle(request: Request, response: Response) {
    const createCarUseCase = container.resolve(ListCarsLogsUseCase);

    const result = await createCarUseCase.execute();

    response.json(result);
  }
}
export { ListCarsLogsController };

import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCarUseCase } from "./CreateCarsUseCase";

class CreateCarController {
  async handle(request: Request, response: Response) {
    const { title, brand, price, age } = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const result = await createCarUseCase.execute({
      title,
      brand,
      price,
      age,
    });

    response.json(result);
  }
}
export { CreateCarController };

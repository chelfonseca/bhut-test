import { query } from "express";
import { injectable } from "tsyringe";

import { api } from "@shared/infra/http/axios";

@injectable()
class ListCarUseCase {
  async execute(): Promise<any> {
    const cars = await api.get("cars", {
      params: {
        _sort: "brand",
        _order: "desc",
        q: query,
      },
    });

    return cars.data;
  }
}
export { ListCarUseCase };

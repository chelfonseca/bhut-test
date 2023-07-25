import { Car } from "@modules/cars/entities/Car";

import { api } from "@shared/infra/http/axios";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  async listCars(): Promise<Car[]> {
    const cars = await api.get("cars", {});

    return cars.data;
  }
}
export { CarsRepository };

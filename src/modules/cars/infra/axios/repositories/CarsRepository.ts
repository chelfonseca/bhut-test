import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/entities/Car";

import { api } from "@shared/infra/http/axios";

import { ICarsRepository } from "../../../repositories/ICarsRepository";

class CarsRepository implements ICarsRepository {
  async createCar({ title, brand, price, age }: ICreateCarDTO): Promise<Car> {
    const createCarResponse = await api.post("cars", {
      title,
      brand,
      price,
      age,
    });

    const { _id: id, __v } = createCarResponse.data;

    const car = {
      id,
      title,
      brand,
      price,
      age,
      __v,
    };

    return car;
  }
  async listCars(): Promise<Car[]> {
    const cars = await api.get("cars", {});

    return cars.data;
  }
}
export { CarsRepository };

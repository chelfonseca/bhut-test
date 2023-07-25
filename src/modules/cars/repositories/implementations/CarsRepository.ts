import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/entities/Car";

import { api } from "@shared/infra/http/axios";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {
  async createCar({ title, brand, price, age }: ICreateCarDTO): Promise<Car> {
    const car = await api.post("cars", {
      title,
      brand,
      price,
      age,
    });

    console.log(car);
    return car.data;
  }
  async listCars(): Promise<Car[]> {
    const cars = await api.get("cars", {});

    return cars.data;
  }
}
export { CarsRepository };

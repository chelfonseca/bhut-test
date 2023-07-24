import { Car } from "../entities/Car";
import { ICarsRepository } from "./ICarRepository";

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async listCars(): Promise<Car[]> {
    return this.cars;
  }
}
export { CarsRepositoryInMemory };

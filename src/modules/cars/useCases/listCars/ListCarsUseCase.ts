import { Car } from "@modules/cars/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
  ) {}

  async execute(): Promise<Car[]> {
    const cars = await this.carsRepository.listCars();

    return cars;
  }
}
export { ListCarUseCase };

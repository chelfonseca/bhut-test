import { Car } from "@modules/cars/entities/Car";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  title: string;
  brand: string;
  price: string;
  age: number;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
  ) {}

  async execute({ title, brand, price, age }: IRequest): Promise<Car> {
    const car = await this.carsRepository.createCar({
      title,
      brand,
      price,
      age,
    });

    return car;
  }
}
export { CreateCarUseCase };

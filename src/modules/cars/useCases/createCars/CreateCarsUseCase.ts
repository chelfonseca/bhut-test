import { Car } from "@modules/cars/entities/Car";
import { CreateCarLog } from "@modules/cars/infra/typeorm/entities/CreateCarLog";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  title: string;
  brand: string;
  price: string;
  age: number;
}

interface IResponse {
  car: Car;
  carLog: CreateCarLog;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("CarsLogsRepository")
    private carsLogsRepository: ICarsLogsRepository,
  ) {}

  async execute({ title, brand, price, age }: IRequest): Promise<IResponse> {
    const car = await this.carsRepository.createCar({
      title,
      brand,
      price,
      age,
    });

    console.log(car.id);

    const carLog = await this.carsLogsRepository.createCarlog(car_id);

    const response = {
      car,
      carLog,
    };

    return response;
  }
}
export { CreateCarUseCase };

import { Car } from "@modules/cars/entities/Car";
import { CarLog } from "@modules/cars/infra/typeorm/entities/CarLog";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

import { ISMSProvider } from "@shared/container/providers/webhook/ISMSProvider";

interface IRequest {
  title: string;
  brand: string;
  price: string;
  age: number;
}

interface IResponse {
  car: Car;
  carLog: CarLog;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    @inject("CarsLogsRepository")
    private carsLogsRepository: ICarsLogsRepository,
    @inject("SMSTwilioProvider")
    private smsTwilioProvider: ISMSProvider,
  ) {}

  async execute({ title, brand, price, age }: IRequest): Promise<IResponse> {
    const car = await this.carsRepository.createCar({
      title,
      brand,
      price,
      age,
    });

    const carLog = await this.carsLogsRepository.createCarlog(car.id);

    await this.smsTwilioProvider.sendSMS();

    const response: IResponse = {
      car,
      carLog,
    };

    return response;
  }
}
export { CreateCarUseCase };

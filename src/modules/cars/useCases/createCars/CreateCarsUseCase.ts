import { Car } from "@modules/cars/entities/Car";
import { CarLog } from "@modules/cars/infra/typeorm/entities/CarLog";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";
import { Twilio } from "twilio";

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
  ) {}

  async execute({ title, brand, price, age }: IRequest): Promise<IResponse> {
    const car = await this.carsRepository.createCar({
      title,
      brand,
      price,
      age,
    });

    const carLog = await this.carsLogsRepository.createCarlog(car.id);

    const response: IResponse = {
      car,
      carLog,
    };

    const accountSid = "AC7c6d4bbe1e4d69bff137a7a82d27f922";
    const authToken = "7cde83ec8d08cefab7641c90cd696521";
    const client = new Twilio(accountSid, authToken);

    client.messages
      .create({
        from: "+17625256474",
        to: "+5511995418955",
        body: "A new Car has been created",
      })
      .then((message) => console.log(message.sid));

    return response;
  }
}
export { CreateCarUseCase };

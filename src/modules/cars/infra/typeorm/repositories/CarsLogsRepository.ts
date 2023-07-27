import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { Repository, getRepository } from "typeorm";

import { CarLog } from "../entities/CarLog";

class CarsLogsRepository implements ICarsLogsRepository {
  private repository: Repository<CarLog>;

  constructor() {
    this.repository = getRepository(CarLog);
  }

  async createCarlog(car_id: string): Promise<CarLog> {
    const carLog = await this.repository.create({ car_id });

    await this.repository.save(carLog);

    return carLog;
  }
  async listCarLog(): Promise<CarLog[]> {
    const carsLogs = await this.repository.find();

    return carsLogs;
  }
}
export { CarsLogsRepository };

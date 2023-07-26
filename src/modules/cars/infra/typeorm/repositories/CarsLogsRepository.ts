import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { Repository, getRepository } from "typeorm";

import { CreateCarLog } from "../entities/CreateCarLog";

class CarsLogsRepository implements ICarsLogsRepository {
  private repository: Repository<CreateCarLog>;

  constructor() {
    this.repository = getRepository(CreateCarLog);
  }

  async createCarlog(car_id: string): Promise<CreateCarLog> {
    const carLog = await this.repository.create({
      car_id,
    });

    await this.repository.save(carLog);

    return carLog;
  }
  async listCarLog(): Promise<CreateCarLog[]> {
    const carsLogs = await this.repository.find();

    return carsLogs;
  }
}
export { CarsLogsRepository };

import { CarLog } from "@modules/cars/infra/typeorm/entities/CarLog";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCarsLogsUseCase {
  constructor(
    @inject("CarsLogsRepository")
    private carsLogsRepository: ICarsLogsRepository,
  ) {}

  async execute(): Promise<CarLog[]> {
    const carsLogs = await this.carsLogsRepository.listCarLog();

    return carsLogs;
  }
}
export { ListCarsLogsUseCase };

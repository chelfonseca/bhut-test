import { CarsLogsRepository } from "@modules/cars/infra/typeorm/repositories/CarsLogsRepository";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/repositories/implementations/CarsRepository";
import { container } from "tsyringe";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsLogsRepository>(
  "CarsLogsRepository",
  CarsLogsRepository,
);

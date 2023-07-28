import { CarsRepository } from "@modules/cars/infra/axios/repositories/CarsRepository";
import { CarsLogsRepository } from "@modules/cars/infra/typeorm/repositories/CarsLogsRepository";
import { ICarsLogsRepository } from "@modules/cars/repositories/ICarsLogsRepository";
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { container } from "tsyringe";
import "@shared/container/providers";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

container.registerSingleton<ICarsLogsRepository>(
  "CarsLogsRepository",
  CarsLogsRepository,
);

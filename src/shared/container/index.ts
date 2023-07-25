import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { CarsRepository } from "@modules/cars/repositories/implementations/CarsRepository";
import { container } from "tsyringe";

container.registerSingleton<ICarsRepository>("CarsRepository", CarsRepository);

import { CreateCarController } from "@modules/cars/useCases/createCars/CreateCarsUseController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsUseCaseController";
import { ListCarsLogsController } from "@modules/cars/useCases/listCarsLogs/ListCarsLogsController";
import { Router } from "express";

const carsRoutes = Router();

const listCarsController = new ListCarsController();
const createCarController = new CreateCarController();
const listCarsLogsController = new ListCarsLogsController();

carsRoutes.get("/listCars", listCarsController.handle);
carsRoutes.post("/createCar", createCarController.handle);
carsRoutes.get("/logs", listCarsLogsController.handle);

export { carsRoutes };

import { CreateCarController } from "@modules/cars/useCases/createCars/CreateCarsUseController";
import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsUseCaseController";
import { Router } from "express";

const carsRoutes = Router();

const listCarsController = new ListCarsController();
const createCarController = new CreateCarController();

carsRoutes.get("/listCars", listCarsController.handle);
carsRoutes.post("/createCar", createCarController.handle);

export { carsRoutes };

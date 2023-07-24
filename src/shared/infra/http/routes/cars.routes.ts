import { ListCarsController } from "@modules/cars/useCases/listCars/ListCarsUseCaseController";
import { Router } from "express";

const carsRoutes = Router();

const listCarsController = new ListCarsController();

carsRoutes.get("/listCars", listCarsController.handle);

export { carsRoutes };

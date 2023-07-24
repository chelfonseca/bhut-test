import { Car } from "../entities/Car";

interface ICarsRepository {
  listCars(): Promise<Car[]>;
}
export { ICarsRepository };

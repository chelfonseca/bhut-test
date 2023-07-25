import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "../entities/Car";

interface ICarsRepository {
  createCar(data: ICreateCarDTO): Promise<Car>;
  listCars(): Promise<Car[]>;
}
export { ICarsRepository };

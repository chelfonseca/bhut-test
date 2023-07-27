import { CarLog } from "../infra/typeorm/entities/CarLog";

interface ICarsLogsRepository {
  createCarlog(car_id: string): Promise<CarLog>;
  listCarLog(): Promise<CarLog[]>;
}
export { ICarsLogsRepository };

import { CreateCarLog } from "../infra/typeorm/entities/CreateCarLog";

interface ICarsLogsRepository {
  createCarlog(car_id: string): Promise<CreateCarLog>;
  listCarLog(): Promise<CreateCarLog[]>;
}
export { ICarsLogsRepository };

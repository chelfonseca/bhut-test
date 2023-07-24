import { v4 as uuidV4 } from "uuid";

class Car {
  id: string;
  title: string;
  brand: string;
  price: string;
  age: number;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
      this.age = 0;
    }
  }
}

export { Car };

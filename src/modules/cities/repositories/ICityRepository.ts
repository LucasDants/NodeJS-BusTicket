import { City } from "@prisma/client";

export interface ICityRepository {
    list: () => Promise<City[]>
}

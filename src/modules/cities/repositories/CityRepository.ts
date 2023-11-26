import prismaClient from "../../../database";

import { ICityRepository } from "./ICityRepository";

export class CityRepository implements ICityRepository {
    async list() {
        const cities = await prismaClient.city.findMany(); 

        return cities
    }
}

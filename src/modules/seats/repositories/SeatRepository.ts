import prismaClient from "../../../database";

import { ISeatRepository } from "./ISeatRepository";

export class SeatRepository implements ISeatRepository {
    async list() {
        const seats = await prismaClient.seat.findMany(); 

        return seats
    }
}

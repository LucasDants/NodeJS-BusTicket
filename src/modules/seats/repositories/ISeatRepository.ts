import {  Seat } from "@prisma/client";

export interface ISeatRepository {
    list: () => Promise<Seat[]>
}

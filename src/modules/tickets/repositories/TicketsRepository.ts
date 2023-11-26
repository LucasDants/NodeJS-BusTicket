import prismaClient from "../../../database";

import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
import { ITicketRepository } from "./ITicketsRepository";

export class TicketRepository implements ITicketRepository {
    async get(seatId: string, date: Date, routes: string[][]) {
        const fromCitiesId = routes.map(item => item[0])
        const toCitiesId = routes.map(item => item[1])

        const ticket = await prismaClient.ticket.findFirst({ where: { seatId, travelDate: date, routes: {
            some: {
                fromCity: {
                    id: { in: fromCitiesId }
                },
                toCity: {
                    id: { in: toCitiesId }
                }
            }
        } }, include: { routes: true} })
    
        return ticket
    }

    async list() {
        const tickets = await prismaClient.ticket.findMany({
            orderBy: { travelDate: 'desc' },
        });

        return tickets;
    }

    async create(data: ICreateTicketDTO) {
        const { routes, ...rest } = data

        const ticket = prismaClient.ticket.create({
            data: {
                ...rest,
                routes: {
                    create: routes.map(([fromId, toId]) => ({
                        fromCity: { connect: { id: fromId }},
                        toCity: { connect: { id: toId } }
                    }))
                }
            }
        });

        return ticket;
    }
}

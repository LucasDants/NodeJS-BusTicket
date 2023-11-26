import prismaClient from "../../../database";


import { IRouteRepository } from "./IRouteRepository";

export class RouteRepository implements IRouteRepository {
    
    async getDayRouteOccupationStatus(from: string, to: string, date: Date) {
        const tickets = await prismaClient.ticket.findMany({
            where: {
                routes: {
                    some: {
                        fromCity: {
                            name: from
                        },
                        toCity: {
                            name: to
                        }
                    },
                },
                travelDate: date
            }
        });

        return tickets.length
    }

    async getDayRouteIncome(date: Date) {
        const tickets = await prismaClient.ticket.findMany({
            where: {
                travelDate: date
            }
        });


        const income = tickets.reduce((prev, current) => {
            return prev + current.price
        }, 0)

        return  income
    }
}

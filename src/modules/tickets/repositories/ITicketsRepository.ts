import { RoutesOnTickets, Ticket } from "@prisma/client";
import { ICreateTicketDTO } from "../dtos/ICreateTicketDTO";
// import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export interface ITicketRepository {
    get: (ticketId: string, date: Date, routes: string[][]) => Promise<Ticket & { routes: RoutesOnTickets[]} | null>
    list: () => Promise<Ticket[]>;
    create: (data: ICreateTicketDTO) => Promise<Ticket>;
}

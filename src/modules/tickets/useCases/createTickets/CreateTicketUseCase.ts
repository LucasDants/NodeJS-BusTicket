import { inject, injectable } from "tsyringe";

import { ITicketRepository } from "../../repositories/ITicketsRepository";
import { ICreateTicketDTO } from "../../dtos/ICreateTicketDTO";
import { AppError } from "../../../../shared/error/AppError";

@injectable()
export class CreateTicketUseCase {
    constructor(
        @inject("TicketRepository")
        private ticketRepository: ITicketRepository
    ) { }

    async execute(data: ICreateTicketDTO) {
        const ticket = await this.ticketRepository.get(data.seatId, data.travelDate, data.routes)

        if (ticket !== null) {

            throw new AppError('Already exists', 404)

        }

        const newTicket = await this.ticketRepository.create(data);

        return newTicket;
    }
}

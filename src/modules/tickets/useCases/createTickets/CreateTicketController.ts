import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTicketUseCase } from "./CreateTicketUseCase";

export class CreateTicketController {
  async execute(req: Request, res: Response) {
   
    const { user, travelDate, routes, seatId } = req.body;

    const createTicket = container.resolve(CreateTicketUseCase);

    const date = new Date(travelDate)

    date.setHours(12, 0, 0, 0)

    console.log(date)

    const ticket = await createTicket.execute({
      user,
      travelDate: date,
      routes,
      seatId, 
      price: routes.length * 20
    });

    return res.status(201).send(ticket);
  }
}
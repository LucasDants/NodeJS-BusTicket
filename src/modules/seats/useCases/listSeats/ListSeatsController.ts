import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSeatsUseCase } from "./ListSeatsUseCase";

export class ListSeatsController {
  async execute(_: Request, res: Response) {

    const listSeats = container.resolve(ListSeatsUseCase);

    const seats = await listSeats.execute();

    return res.status(200).send(seats);
  }
}
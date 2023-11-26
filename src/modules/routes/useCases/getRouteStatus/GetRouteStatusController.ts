import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetRouteStatusUseCase } from "./GetRouteStatusUseCase";

export class GetRouteStatusController {
  async execute(req: Request, res: Response) {

    const { from, to, date } = req.query as any;

    const getRouteStatus = container.resolve(GetRouteStatusUseCase);

    const travelDate = new Date(date)

    travelDate.setHours(12, 0, 0, 0)

    const occupation = await getRouteStatus.execute(from, to, travelDate);

    return res.status(201).send({ occupation });
  }
}
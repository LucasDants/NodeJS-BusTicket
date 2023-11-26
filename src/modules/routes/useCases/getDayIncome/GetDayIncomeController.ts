import { Request, Response } from "express";
import { container } from "tsyringe";

import { GetDayIncomeUseCase } from "./GetDayIncomeUseCase";

export class GetDayIncomeController {
  async execute(req: Request, res: Response) {

    const {  date } = req.query as any;

    const getDayIncomeUseCase = container.resolve(GetDayIncomeUseCase);

    const travelDate = new Date(date)

    travelDate.setHours(12, 0, 0, 0)


    const income = await getDayIncomeUseCase.execute(travelDate);

    return res.status(201).send({income});
  }
}
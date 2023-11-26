import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListCitiesUseCase } from "./ListCitiesUseCase";

export class ListCitiesController {
  async execute(_: Request, res: Response) {

    const listCities = container.resolve(ListCitiesUseCase);

    const cities = await listCities.execute();

    return res.status(200).send(cities);
  }
}
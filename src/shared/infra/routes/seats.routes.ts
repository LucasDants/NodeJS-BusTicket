import { Router } from "express";

import { ListSeatsController } from "../../../modules/seats/useCases/listSeats/ListSeatsController";

const seatsRouter = Router();

const listSeatsController = new ListSeatsController();

seatsRouter.get("/", listSeatsController.execute);

export { seatsRouter };

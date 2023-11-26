import { Router } from "express";

import { ticketsRouter } from "./tickets.routes";
import { seatsRouter } from "./seats.routes";
import { citiesRouter } from "./cities.routes";
import { routesRouter } from "./routes.routes";

const router = Router();

router.use("/tickets", ticketsRouter);
router.use("/routes", routesRouter);
router.use("/cities", citiesRouter);
router.use("/seats", seatsRouter);

export { router };

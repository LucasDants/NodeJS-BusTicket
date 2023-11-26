import { Router } from "express";
import { ListCitiesController } from "../../../modules/cities/useCases/listCities/ListCitiesController";

const citiesRouter = Router();

const listCitiesController = new ListCitiesController();

citiesRouter.get("/", listCitiesController.execute);

export { citiesRouter };

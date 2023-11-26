import { Router } from "express";
import { GetRouteStatusController } from "../../../modules/routes/useCases/getRouteStatus/GetRouteStatusController";
import { GetDayIncomeController } from "../../../modules/routes/useCases/getDayIncome/GetDayIncomeController";

const routesRouter = Router();

const getRouteStatusController = new GetRouteStatusController();
const getDayIncomeController = new GetDayIncomeController();

routesRouter.get("/status", getRouteStatusController.execute);
routesRouter.get("/income", getDayIncomeController.execute);

export { routesRouter };

import { Router } from "express";
import { CreateTicketController } from "../../../modules/tickets/useCases/createTickets/CreateTicketController";


const ticketsRouter = Router();

// const listProductController = new ListProductController();
const createTicketController = new CreateTicketController();

ticketsRouter.post("/", createTicketController.execute);
// ticketsRouter.post(
//   "/",
//   createProductController.execute
// );

export { ticketsRouter };

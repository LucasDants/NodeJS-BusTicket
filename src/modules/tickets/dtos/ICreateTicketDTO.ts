import { Ticket } from "@prisma/client";

export type ICreateTicketDTO = {
  routes: string[][]
} & Pick<
  Ticket,
  "user" | "travelDate" | "price" | "seatId" 
> ;

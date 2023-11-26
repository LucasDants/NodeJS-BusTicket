import { container } from "tsyringe";

import { ITicketRepository } from "../../modules/tickets/repositories/ITicketsRepository";
import { TicketRepository } from "../../modules/tickets/repositories/TicketsRepository";
import { IRouteRepository } from "../../modules/routes/repositories/IRouteRepository";
import { RouteRepository } from "../../modules/routes/repositories/RouteRepository";
import { ICityRepository } from "../../modules/cities/repositories/ICityRepository";
import { CityRepository } from "../../modules/cities/repositories/CityRepository";
import { SeatRepository } from "../../modules/seats/repositories/SeatRepository";
import { ISeatRepository } from "../../modules/seats/repositories/ISeatRepository";


container.registerSingleton<ITicketRepository>(
  "TicketRepository",
  TicketRepository
);


container.registerSingleton<IRouteRepository>(
  "RouteRepository",
  RouteRepository
);

container.registerSingleton<ICityRepository>(
  "CityRepository",
  CityRepository
);

container.registerSingleton<ISeatRepository>(
  "SeatRepository",
  SeatRepository
);
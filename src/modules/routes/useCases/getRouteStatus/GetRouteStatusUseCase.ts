import { inject, injectable } from "tsyringe";
import { IRouteRepository } from "../../repositories/IRouteRepository";



@injectable()
export class GetRouteStatusUseCase {
  constructor(
    @inject("RouteRepository")
    private routeRepository: IRouteRepository
  ) {}

  async execute(from: string, to: string, date: Date) {
    const status = await this.routeRepository.getDayRouteOccupationStatus(from, to , date)

    return status;
  }
}
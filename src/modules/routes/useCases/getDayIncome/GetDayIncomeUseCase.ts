import { inject, injectable } from "tsyringe";
import { IRouteRepository } from "../../repositories/IRouteRepository";



@injectable()
export class GetDayIncomeUseCase {
  constructor(
    @inject("RouteRepository")
    private routeRepository: IRouteRepository
  ) {}

  async execute(date: Date) {
    const income = await this.routeRepository.getDayRouteIncome( date)

    return income;
  }
}
import { inject, injectable } from "tsyringe";
import { ISeatRepository } from "../../repositories/ISeatRepository";


@injectable()
export class ListSeatsUseCase {
  constructor(
    @inject("SeatRepository")
    private seatsRepository: ISeatRepository
  ) {}

  async execute() {
    const cities = await this.seatsRepository.list()
    
    return cities;
  }
}
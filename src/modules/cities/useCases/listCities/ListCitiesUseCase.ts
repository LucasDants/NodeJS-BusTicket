import { inject, injectable } from "tsyringe";
import { ICityRepository } from "../../repositories/ICityRepository";


@injectable()
export class ListCitiesUseCase {
  constructor(
    @inject("CityRepository")
    private cityRepository: ICityRepository
  ) {}

  async execute() {
    const cities = await this.cityRepository.list()
    
    return cities;
  }
}
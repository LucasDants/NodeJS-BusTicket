
export interface IRouteRepository {
    getDayRouteOccupationStatus: (from: string, to: string, date: Date) => Promise<number>
    getDayRouteIncome: (date: Date) => Promise<number>
}

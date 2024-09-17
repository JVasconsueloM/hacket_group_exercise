import {DataUsaRepository} from "../../data/repositories/data-usa.repository";
import {ChartData} from "../interfaces/chart.interface";
import {Population} from "../../core/models/population-data.model";
import {populationChartMapper} from "../mappers/population-chart.mapper";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PopulationUseCase {
  constructor(private repository: DataUsaRepository) {
  }

  async fetchPopulationData(): Promise<ChartData> {
    const data = await this.repository.fetchPopulationData();
    return this.transformData(data);
  }

  private transformData(data: Population[]): ChartData {
    return populationChartMapper(data)
  }
}

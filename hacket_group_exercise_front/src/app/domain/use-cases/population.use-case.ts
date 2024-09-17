import { DataUsaRepository } from '../../data/repositories/data-usa.repository';
import { ChartData } from '../interfaces/chart.interface';
import { Population } from '../../core/models/population-data.model';
import { PopulationChartMapper } from '../mappers/population-chart.mapper';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PopulationUseCase {
  constructor(
    private repository: DataUsaRepository,
    private mapper: PopulationChartMapper
  ) {}

  async fetchPopulationData(): Promise<ChartData> {
    const data = await this.repository.fetchPopulationData();
    return this.transformData(data);
  }

  private transformData(data: Population[]): ChartData {
    return this.mapper.toChartData(data);
  }
}

import { Population } from '../../core/models/population-data.model';
import { Injectable } from '@angular/core';
import { ChartData } from '../interfaces/chart.interface';

@Injectable({
  providedIn: 'root',
})
export class PopulationChartMapper {
  toChartData(data: Population[]): ChartData {
    const [years, states] = this.extractYearsAndStates(data);
    const dataset = this.buildDataset(years, states, data);
    const percentageDataset = this.calculatePercentageDataset(states, dataset);

    return {
      labels: years,
      datasets: states.map(state => ({
        label: state,
        data: percentageDataset[state],
      })),
    };
  }

  private extractYearsAndStates(data: Population[]): string[][] {
    const years = Array.from(new Set(data.map(item => item.year))).sort((a, b) => Number(a) - Number(b));
    const states = Array.from(new Set(data.map(item => item.state)));
    return [years, states];
  }

  private buildDataset(years: string[], states: string[], data: Population[]): { [p: string]: number[] } {
    const dataset: { [key: string]: number[] } = {};

    states.forEach(state => {
      dataset[state] = Array(years.length).fill(0);
    });

    data.forEach(item => {
      const yearIndex = years.indexOf(item.year);
      if (yearIndex !== -1) {
        dataset[item.state][yearIndex] = item.amount;
      }
    });

    return dataset;
  }

  private calculatePercentageDataset(
    states: string[],
    dataset: { [key: string]: number[] }
  ): {
    [p: string]: number[];
  } {
    const percentageDataset: { [key: string]: number[] } = {};
    states.forEach(state => {
      percentageDataset[state] = [];
      for (let i = 0; i < dataset[state].length; i++) {
        if (i === 0) {
          percentageDataset[state].push(100);
        } else {
          const previousAmount = dataset[state][i - 1];
          const currentAmount = dataset[state][i];
          const percentageChange = previousAmount ? (currentAmount / previousAmount) * 100 : 0;
          percentageDataset[state].push(percentageChange);
        }
      }
    });
    return percentageDataset;
  }
}

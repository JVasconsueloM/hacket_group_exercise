import {Population} from "../../core/models/population-data.model";

export const populationChartMapper = (data: Population[]) => {
  const years = Array.from(new Set(data.map(item => item.year)))
    .sort((a, b) => Number(a) - Number(b));
  const states = Array.from(new Set(data.map(item => item.state)));

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

  const percentageDataset: { [key: string]: number[] } = {};
  states.forEach(state => {
    percentageDataset[state] = [];
    for (let i = 0; i < dataset[state].length; i++) {
      if (i === 0) {
        percentageDataset[state].push(100);
      } else {
        const previousAmount = dataset[state][i - 1];
        const currentAmount = dataset[state][i];
        const percentageChange = (currentAmount / previousAmount) * 100;
        percentageDataset[state].push(percentageChange);
      }
    }
  });

  return {
    labels: years,
    datasets: states.map(state => ({
      label: state,
      data: percentageDataset[state],
    })),
  };
}

export interface ChartData {
  labels: string[];
  datasets: ChartDataSet[];
}

export interface ChartDataSet {
  label?: string;
  data: number[];
}

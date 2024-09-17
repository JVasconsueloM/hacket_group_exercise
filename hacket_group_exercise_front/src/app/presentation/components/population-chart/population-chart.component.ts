import {Component, OnInit, signal} from '@angular/core';
import {BaseChartDirective} from "ng2-charts";
import {PopulationUseCase} from "../../../domain/use-cases/population.use-case";
import {ChartDataSet} from "../../../domain/interfaces/chart.interface";

@Component({
  selector: 'app-population-chart',
  standalone: true,
  imports: [
    BaseChartDirective
  ],
  templateUrl: './population-chart.component.html',
  styleUrl: './population-chart.component.scss'
})
export class PopulationChartComponent implements OnInit {
  labels = signal<string[]>([]);
  datasets = signal<ChartDataSet[]>([]);
  chartOptions = {
    responsive: true
  };
  constructor(private populationUseCase: PopulationUseCase) {
  }

  ngOnInit() {
    this.populationUseCase.fetchPopulationData()
      .then(({labels, datasets}) => {
        this.labels.set(labels);
        this.datasets.set(datasets);
      })
  }
}

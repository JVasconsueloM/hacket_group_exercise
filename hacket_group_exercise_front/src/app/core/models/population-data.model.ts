export interface PopulationResponse {
  population: Population[]
}

export interface Population {
  state: string;
  year: string;
  amount: number;
}

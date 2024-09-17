export interface VehicleOwnershipResponse {
  vehicleOwnership: VehicleOwnership[];
}

export interface VehicleOwnership {
  vehiclesAvailable: string;
  percentage: number;
}

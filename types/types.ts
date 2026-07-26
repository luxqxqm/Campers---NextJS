export type VehicleBodyType = "alcove" | "panel_van" | "integrated" | "semi_integrated"

export type VehicleTransmissionType = "automatic" | "manual"

export type VehicleEngineType = "diesel" | "petrol" | "hybrid" | "electric"

export interface FilterParams {
  location?: string;
  form?: VehicleBodyType;
  transmission?: VehicleTransmissionType;
  engine?: VehicleEngineType;
}
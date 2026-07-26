export function formatVehicleValue(value: string) {
  if (value === "semi_integrated") return "Semi Integrated";
  if (value === "panel_van") return "Panel Van";
  if (value === "integrated") return "Integrated";
  if (value === "alcove") return "Alcove";
  if (value === "automatic") return "Automatic";
  if (value === "manual") return "Manual";
  if (value === "diesel") return "Diesel";
  if (value === "petrol") return "Petrol";
  if (value === "hybrid") return "Hybrid";
  if (value === "electric") return "Electric";

  return value;
}


export function formatAmenitiesValue(value: string) {
  if(value === "ac") return "AC"
  if(value === "bathroom") return "Bathroom"
  if(value === "kitchen") return "Kitchen"
  if(value === "radio") return "Radio"
  if(value === "refrigerator") return "Refrigerator"
  if (value === "water") return "Water"
  if (value === "tv") return "TV"
  if (value === "radio") return "Radio"
  if (value === "microwave") return "Microwave"
  if(value === "gas") return "Gas"

} 
export interface VehiclesResponse {
  vehicleType:    string;
  vehiclePlate:   string;
  spotToFill:     number;
  dateOfEntrance: Date;
  id:             number;
}


export interface FormValues {
  vehiclePlate:string;
  vehicleType:string;
}
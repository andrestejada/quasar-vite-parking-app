import { calculateHours } from "./calculateHours";
import { calculateBikeRate } from './calculateBikeRate';
import { calculateCarRate } from "./calculateCarRate";

export const calculateRate = (date: string | Date, typeVehicle: string) => {
  const quantityOfhour = calculateHours(date);
  let totalRate: number; 
  
  if(typeVehicle === 'Bike'){
    totalRate = calculateBikeRate(quantityOfhour);
  }else{
    totalRate = calculateCarRate(quantityOfhour);
  } 
  return totalRate
 
}
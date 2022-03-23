export const formatMoney =(numbertoFormat:number)=>{
  return new Intl.NumberFormat('es-CO').format(numbertoFormat)  
}
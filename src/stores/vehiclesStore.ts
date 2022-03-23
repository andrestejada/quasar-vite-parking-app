import { defineStore } from "pinia";
import vehiclesApi from "~/api/vehiclesApi";
export interface Vehicle {
  id:number
  vehicleType:string
  vehiclePlate:string
  spotToFill:number
  dateOfEntrance:string | Date
}
export interface vehiclesState {
  allVehicles:Vehicle[]
}
const useVehicleStore = defineStore('vehicles',{
  state:():vehiclesState=>({
    allVehicles:[]
  }),

  actions:{
    async getAllVehicles(){
      try {
        const {data} = await vehiclesApi.get('/parkedVehicles')
        this.allVehicles = data;
      } catch (error) {
        console.log(error)
      }
    },
    async removeVehicleById(id:number){
      try {
        await vehiclesApi.delete(`/parkedVehicles/${id}`)
        this.allVehicles = this.allVehicles.filter((vehicle)=>vehicle.id !== id)
      } catch (error) {
        console.log(error)
      }
    },
    post(){
      vehiclesApi.post('/pei',)
    }
  },

  getters:{
    vehiclesAvailable:(state)=> state.allVehicles
  }  
})

export default useVehicleStore;
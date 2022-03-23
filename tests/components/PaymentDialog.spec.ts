import { mount } from "@vue/test-utils";
import Quasar from "quasar";
import PaymentDialog from '../../src/components/PaymentDialog.vue';
import { createTestingPinia } from '@pinia/testing';
import { Vehicle } from '../../src/stores/vehiclesStore';

describe('testing in the paymentDialog component', () => {
  const mockVehicleInfo:Vehicle={
    id:1,
    dateOfEntrance:'2022-03-20T13:06:17.146Z',
    spotToFill:2,
    vehiclePlate:'NOL38F',
    vehicleType:'Bike'
  }
  const wrapper = mount(PaymentDialog,{
    props:{
      vehicleInfo: mockVehicleInfo,
      isOpen: false,
    },
    global:{
      plugins:[Quasar,createTestingPinia()]
    }
  })
  test('should be render correctly', () => {
    console.log(wrapper.html())
  });
});
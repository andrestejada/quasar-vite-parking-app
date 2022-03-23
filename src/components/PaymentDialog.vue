<template>
  <q-dialog v-model="isOpen" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-avatar icon="paid" color="primary" text-color="white" />
        <span class="q-ml-sm text-h6"
          >Are you sure that you made the payment?.</span
        >
      </q-card-section>
      <q-card-section class="row items-center">
        <p class="q-ml-sm">
          The vehicle with plates {{ plate }} spend {{ hours }} hours in the
          parking and the value to pay is
          <span class="text-weight-bolder">${{ valueToPay }}</span>
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Cancel" color='primary' @click="cancel" />
        <q-btn label="Yes,Please" color="primary" @click="paid" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import useVehicleStore, { Vehicle } from "../stores/vehiclesStore";
import { calculateHours } from "../utils/calculateHours";
import { calculateRate } from "../utils/calculateRate";
import { formatMoney } from '../utils/formatMoney';
const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const isOpen = computed(() => props.isOpen);
const store = useVehicleStore();

const paid = () => {
  store.removeVehicleById(props.vehicleInfo.id);
  emit("close", false);
};

const cancel = () => {
  emit("close", false);
};
const plate = computed<string>(() => props.vehicleInfo.vehiclePlate);
const hours = computed(() => calculateHours(props.vehicleInfo.dateOfEntrance));

const valueToPay = computed(() =>{
    const rateTopay = calculateRate(props.vehicleInfo.dateOfEntrance, props.vehicleInfo.vehicleType)
    const valueWithFormat = formatMoney(rateTopay)
    return valueWithFormat
}
);
interface Props {
  vehicleInfo: Vehicle;
  isOpen: boolean;
}

interface Emits {
  (e: "close", value: boolean): void;
}
</script>
<style lang="scss" scoped></style>

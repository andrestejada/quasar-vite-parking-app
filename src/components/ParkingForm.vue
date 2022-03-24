<template>
  <h4 class="text-h4 q-mb-sm q-mt-xs">Add Vehicles</h4>
  <q-separator color="secondary" size="3px" class="q-mb-lg" />
  <q-form
    @submit="onSubmit"
    @reset="onReset"
    ref="form"
  >
    <div class="row justify-around q-mb-lg">
      <q-select
        class="col-5"
        :options="['Bike', 'Car']"
        type="text"
        label="Type Of vehicle"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'field required']"
        v-model="formValues.vehicleType"
      />
      <q-input
        class="col-5"
        maxlength="6"
        type="text"
        label="Plate"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'field requiered',
          isValitePlate,
        ]"
        v-model="formValues.vehiclePlate"
      />
    </div>
    <div class="row justify-center">
      <q-btn
        type="submit"
        class="col-3"
        label="save vehicle"
        color="primary"
      />
    </div>
  </q-form>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { isValitePlate } from '../utils/isvalidPlate';
import useVehicleStore from '../stores/vehiclesStore';
import { FormValues } from '../stores/interfaces';

const store = useVehicleStore();
const formValues = ref<FormValues>({
  vehiclePlate: "",
  vehicleType: "",
});

watch(()=>formValues.value.vehiclePlate,(val)=>{
  formValues.value.vehiclePlate = val.toUpperCase()
})

const form = ref<HTMLFormElement|null>(null)

const onSubmit=()=>{
  store.addNewVehicle(formValues.value)
  form.value?.reset()
}

const onReset=()=>{
  formValues.value.vehiclePlate=''
  formValues.value.vehicleType=''
}


</script>

<style lang="scss" scoped></style>

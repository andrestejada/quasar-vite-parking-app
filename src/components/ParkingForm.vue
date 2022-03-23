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
        v-model="formValues.typeOfVehicle"
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
        v-model="formValues.plate"
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

interface FormValues {
  plate:string;
  typeOfVehicle:string;
}
const formValues = ref<FormValues>({
  plate: "",
  typeOfVehicle: "",
});

watch(()=>formValues.value.plate,(val)=>{
  formValues.value.plate = val.toUpperCase()
})

const form = ref<HTMLFormElement|null>(null)

const onSubmit=()=>{
  form.value?.reset()
}

const onReset=()=>{
  formValues.value.plate=''
  formValues.value.typeOfVehicle=''
}


</script>

<style lang="scss" scoped></style>

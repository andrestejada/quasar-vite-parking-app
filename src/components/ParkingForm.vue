<template>
  <h4 class="text-h4 q-mb-sm q-mt-xs">Add Vehicles</h4>
  <q-separator color="secondary" size="3px" class="q-mb-lg" />
  <q-form>
    <div class="row justify-around" >
      <q-select
        class="col-5"
        :options="['Bike', 'Car']"
        type="text"
        label="Tipo de Vehiculo"
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'field required']"
      />
      <q-input
        class="text-uppercase col-5"
        maxlength="6"
        type="text"
        label="Plate"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'field requiered',
          isValitePlate,
        ]"
      />
    </div>     
  </q-form>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
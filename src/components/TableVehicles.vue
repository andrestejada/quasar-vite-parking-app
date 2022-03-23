<template>
  <div class="q-pa-md">
    <q-table title="Vehicles" row-key="name" :rows="allVehicles" :columns="columns">
      <template v-slot:body-cell-action="props" >
          <q-td key="action" :props="props" >          
            <q-btn
              label="Pay"
              color="secondary"
              icon="paid"
              @click="paid(props.row)"
            />          
          </q-td>
      </template>
    </q-table>
  </div>
  <PaymentDialog
    :vehicleInfo="vehiceleInfo"
    :isOpen="isOpen"
    @close="isOpen=$event"
  />
</template>

<script lang="ts" setup>
import { QTableProps } from 'quasar';
import { computed, ref } from 'vue';
import useVehicleStore from '~/stores/vehiclesStore';
import { formatHour } from '../utils/formatHour';
import { Vehicle } from '../stores/vehiclesStore';
const store = useVehicleStore();
store.getAllVehicles();

const allVehicles = computed(() => store.allVehicles);
const vehiceleInfo = ref();
const isOpen = ref(false)

const paid =(props:Vehicle)=>{
  vehiceleInfo.value = props;
  isOpen.value = true
}

const columns:QTableProps['columns']=[
        {
          name: 'plate',
          label: 'Plate',
          align: 'left',
          field: 'vehiclePlate',
        },
        {
          name:'type',          
          label:'Type Of Vehicle',
          field:'vehicleType',          
          align: 'left',          
        },
        {
          name:'entryDate',
          label:'Date of Entry',
          field:'dateOfEntrance',                 
          format:formatHour ,
          align: 'left',
        },
        {
          name:'action',
          label:'Action',
          align: 'left',
          field:'action'
        }
      ]

</script>

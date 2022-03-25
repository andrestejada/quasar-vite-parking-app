<template>
  <div class="form-login-container col-11 col-sm-6 col-md-4 col-lg-3" >
      <h4 class="text-h4 q-mb-sm text-center">Login</h4>
      <q-separator color="secondary" size="3px" class="q-mb-lg" />  
      <q-form
        class="q-gutter-md q-mt-sm"
      > 
      <q-input
        v-model="loginValues.email"      
        type="text"
        filled
        label="Email"
        placeholder="email@email.com"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'El correo es obligatorio' ]"
      />

      <q-input
        filled
        type="password"
        label="Password"
        placeholder="*******"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'La contraseña es obligatoria']"
        v-model="loginValues.password"  
      />
       <!-- <div v-if="msgError" inline-actions class="text-white bg-red q-pa-md text-center">
        {{msgError}}
      </div> -->
      <div class="row justify-center" >
        <q-btn class="col-6" label="Iniciar Sesion" type="submit" color="secondary"/>
      </div>
    </q-form>
    </div>  

</template>

<script lang="ts" setup>
import { ref } from 'vue';


const loginValues = ref({
  email:'',
  password:''
})
</script>

<style lang="scss" scoped>
.form-login-container{
  background-color: rgb(248, 248, 248);
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 7px #b4b1b1;
}
</style>
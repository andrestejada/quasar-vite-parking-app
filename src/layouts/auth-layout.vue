<template>
  <div class="row items-center justify-center auth-layout">
    <router-view />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .auth-layout{
    height: 100vh;
    background: rgb(237,235,255);
    background: linear-gradient(12deg, rgba(237,235,255,1) 0%, rgba(220,171,255,1) 45%, rgba(239,135,255,1) 100%);
  }
</style>
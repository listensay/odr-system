<script setup>
const leftDrawerOpen = ref(false)
</script>

<template>
  <div class="bg-slate-50">
    <q-layout view="hHh lpR lFr">
      <q-header reveal class="h-14 bg-red-400  w-full flex-shrink-0">
        <header>header</header>
      </q-header>

      <q-drawer v-model="leftDrawerOpen" show-if-above side="left">
        <LayoutLeft />
      </q-drawer>

      <q-page-container>
        <slot/>
      </q-page-container>
    </q-layout>
  </div>
</template>

<template>
  <v-layout class="d-flex fill-height overflow-hidden">
    <v-navigation-drawer
      v-model="drawer"
      :rail="mini"
      permanent
      color="grey-lighten-4"
      width="250"
      class="h-100"
    >
      <v-list class="h-200 pa-0">
        <v-list-item
          @click="mini = !mini"
          :prepend-icon="mini ? 'chevron_right' : 'chevron_left'"
          class="mb-2"
          style="cursor: pointer"
        />
        
        <v-divider class="mb-2"></v-divider>

        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          :prepend-icon="item.icon"
          :title="item.title"
          :value="item.value"
          link
          class="py-2"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main class="overflow-hidden">
      <v-container fluid class="pa-0 h-100">
        <Carousel />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Carousel from '@/modules/home/components/Carousel.vue'

const drawer = ref(true)
const mini = ref(false)

const menuItems = [
  { icon: 'shopping_cart_checkout', title: 'Productos', value: 'productos' },
  { icon: 'shopping_cart', title: 'Mis órdenes', value: 'ordenes' },
  { icon: 'factory', title: 'Producción', value: 'produccion' },
  { icon: 'description', title: 'Reportes', value: 'reportes' },
  { icon: 'group', title: 'Empleados', value: 'empleados' },
  { icon: 'person', title: 'Clientes', value: 'clientes' }
]
</script>

<style scoped>
:deep(.v-navigation-drawer--rail) {
  width: 56px !important;
}

:deep(.v-layout) {
  min-height: 100vh;
}
</style>

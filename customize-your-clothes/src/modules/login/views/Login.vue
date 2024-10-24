<template>
  <v-container fluid class="pa-0 fill-height">
    <v-row no-gutters class="fill-height">
      <v-col cols="6" class="d-flex align-center bg-grey-lighten-4">
        <v-container>
          <h1 class="text-h3 font-weight-bold mb-4">El mejor dashboard para diseñador tu marca y comenzar a ganar dinero</h1>
          <p class="text-body-1">
            Conoce las mejores herramientas para diseñar tu marca y comenzar a ganar dinero
          </p>
        </v-container>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <v-container>
          <LoginPopup />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import LoginPopup from '@/modules/login/components/SignIn.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
/* Estilos adicionales si son necesarios */
</style>

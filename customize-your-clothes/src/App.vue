<template>
  <v-app>
    <v-app-bar app color="var(--color-neutral-100)" elevation="1">
      <v-toolbar-title class="text-h6 font-weight-bold" style="color: var(--color-primary);">
        <v-icon icon="checkroom" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main class="bg-neutral-200">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style>
</style>

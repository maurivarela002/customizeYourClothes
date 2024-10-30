<template>
  <v-card 
    class="technical-sheet h-100 d-flex flex-column"
    color="surface" 
    elevation="0"
  >
    <v-card-title class="text-h5 font-weight-medium sticky-header pa-4">
      {{ product.title }}
      <v-chip class="ml-4" :color="product.status.color" size="small">
        {{ product.status.text }}
      </v-chip>
    </v-card-title>
    <v-card-text class="scrollable-content px-6 pt-0 pb-6 flex-1">
      <p class="text-body-1 mb-8">{{ product.description }}</p>
      <div class="text-h6 mb-4">Detalles</div>
      <v-list density="compact" class="pa-0 bg-surface">
        <v-list-item
          v-for="(detail, index) in product.details"
          :key="index"
          class="px-0"
        >
          <template v-slot:prepend>
            <v-icon color="primary">{{ detail.icon }}</v-icon>
          </template>
          <v-list-item-title>{{ detail.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    title: string;
    description: string;
    status: {
      text: string;
      color: string;
    };
    details: Array<{
      icon: string;
      text: string;
    }>;
  }
}>();
</script>

<style scoped>
.sticky-header {
  position: sticky;
  top: 0;
  background: var(--color-surface);
  z-index: 1;
}

.scrollable-content {
  overflow-y: auto;
}

.scrollable-content::-webkit-scrollbar {
  width: var(--spacing-1);
}

.scrollable-content::-webkit-scrollbar-track {
  background: transparent;
}

.scrollable-content::-webkit-scrollbar-thumb {
  background-color: var(--color-neutral-400);
  border-radius: var(--border-radius-md);
}

.scrollable-content::-webkit-scrollbar-thumb:hover {
  background-color: var(--color-neutral-500);
}
</style> 
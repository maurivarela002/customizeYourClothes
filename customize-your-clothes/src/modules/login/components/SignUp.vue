<template>
  <v-card v-if="!showLoginPopup" class="mx-auto pa-10 pb-0" elevation="8" max-width="448" rounded="lg" color="var(--color-neutral-100)">
    <h2 class="text-h5 font-weight-bold mb-6" style="color: var(--color-primary);">Crea tu perfil de diseñador</h2>

    <div class="text-subtitle-1 text-medium-emphasis mb-2">Datos del artista</div>

    <v-text-field
      v-model="nombre"
      density="compact"
      label="Nombre"
      prepend-inner-icon="person"
      variant="outlined"
      class="mb-4"
    ></v-text-field>

    <v-text-field
      v-model="apellido"
      density="compact"
      label="Apellido"
      prepend-inner-icon="person"
      variant="outlined"
      class="mb-4"
    ></v-text-field>

    <v-text-field
      v-model="email"
      density="compact"
      label="Email"
      prepend-inner-icon="mail"
      variant="outlined"
      class="mb-4"
    ></v-text-field>

    <v-text-field
      v-model="password"
      :append-inner-icon="visible ? 'visibility_off' : 'visibility'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      label="Contraseña"
      prepend-inner-icon="lock"
      variant="outlined"
      @click:append-inner="visible = !visible"
      class="mb-6"
    ></v-text-field>

    <v-btn class="mb-6" color="var(--color-primary)" size="large" block @click="handleSubmit">
      Crear mi estudio virtual
    </v-btn>

    <v-divider class="mb-6"></v-divider>

    <v-card-text class="text-center">
      <a class="text-decoration-none" style="color: var(--color-accent-2);" @click="showLoginPopup = true">
        ¿Ya tienes una cuenta? Accede a tu galería
      </a>
    </v-card-text>
  </v-card>
  <SignIn v-if="showLoginPopup" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SignIn from '@/modules/login/components/SignIn.vue';

const nombre = ref('');
const apellido = ref('');
const email = ref('');
const password = ref('');
const showLoginPopup = ref(false);
const visible = ref(false);

const handleSubmit = () => {
  // Lógica para manejar el envío del formulario
};

const signInWithGoogle = () => {
  // Lógica para manejar el inicio de sesión con Google
};
</script>

<style scoped>
.v-container {
  min-height: calc(100vh - 64px - 4rem); /* Ajusta estos valores según la altura de tu AppBar y Footer */
}

.v-text-field ::v-deep .v-field__outline__start,
.v-text-field ::v-deep .v-field__outline__end {
  border-color: var(--color-neutral-400) !important;
}

.v-text-field ::v-deep .v-field__outline__start:hover,
.v-text-field ::v-deep .v-field__outline__end:hover {
  border-color: var(--color-primary) !important;
}

.v-text-field ::v-deep .v-field--focused .v-field__outline__start,
.v-text-field ::v-deep .v-field--focused .v-field__outline__end {
  border-color: var(--color-primary) !important;
}
</style>

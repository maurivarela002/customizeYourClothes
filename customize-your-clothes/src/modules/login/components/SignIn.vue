<template>
  <v-card 
    v-if="!showSignUp" 
    class="mx-auto pa-10 pb-0" 
    elevation="8" 
    max-width="448" 
    rounded="lg" 
    color="neutral-100"
  >
    <h2 class="text-h5 font-weight-bold mb-6 text-primary">
      Desbloquea tu estudio creativo
    </h2>

    <div class="text-subtitle-1 text-medium-emphasis mb-2">
      Nombre de usuario
    </div>

    <v-text-field
      density="compact"
      placeholder="Ingrese su correo electrónico"
      prepend-inner-icon="email"
      variant="outlined"
      class="mb-4"
    ></v-text-field>

    <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between mb-2">
      Contraseña
      <a class="text-caption text-decoration-none text-blue" href="#" rel="noopener noreferrer" target="_blank">
        ¿Olvidó su contraseña?
      </a>  
    </div>

    <v-text-field
      :append-inner-icon="visible ? 'visibility_off' : 'visibility'"
      :type="visible ? 'text' : 'password'"
      density="compact"
      placeholder="Ingrese su contraseña"
      prepend-inner-icon="lock"
      variant="outlined"
      @click:append-inner="visible = !visible"
      class="mb-4"
    ></v-text-field>

    <v-card class="mb-6" color="surface-variant" variant="tonal" v-if="repeatLogin >= 3">
      <v-card-text class="text-medium-emphasis text-caption">
        Demasiados intentos fallidos. Por favor, intente más tarde.
      </v-card-text>
    </v-card>

    <v-btn class="mb-6" color="primary" size="large" block @click="handleSubmit">
      Entrar al taller de diseño
    </v-btn>

    <v-card-text class="text-center">
      <a 
        class="text-decoration-none text-accent-2" 
        @click="showSignUp = true"
      >
        ¿Listo para plasmar tu visión? ¡Crea tu cuenta de diseñador ahora!
      </a>
    </v-card-text>
  </v-card>

  <SignUp v-if="showSignUp" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SignUp from '@/modules/login/components/SignUp.vue';

const router = useRouter();
const visible = ref(false);
const showSignUp = ref(false);
const repeatLogin = ref(0);

const handleSubmit = () => {
  repeatLogin.value++;
  router.push('/workspace/home');
};
</script>

<style scoped>
.v-text-field :deep(.v-field__outline__start),
.v-text-field :deep(.v-field__outline__end) {
  border-color: var(--color-neutral-400) !important;
}

.v-text-field :deep(.v-field__outline__start:hover),
.v-text-field :deep(.v-field__outline__end:hover),
.v-text-field :deep(.v-field--focused .v-field__outline__start),
.v-text-field :deep(.v-field--focused .v-field__outline__end) {
  border-color: var(--color-primary) !important;
}
</style>

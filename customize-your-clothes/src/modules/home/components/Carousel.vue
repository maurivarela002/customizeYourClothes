<template>
    <div class="pa-8">
        <div class="content-wrapper mx-auto">
            <v-row no-gutters>
                <v-col cols="6" class="pr-3">
                    <v-carousel
                        v-model="currentSlide"
                        cycle
                        :height="carouselHeight"
                        hide-delimiters
                        :show-arrows="true"
                        :progress="false"
                        class="rounded-lg"
                    >
                        <template v-slot:prev="{ props }">
                            <v-btn
                                v-bind="props"
                                class="carousel-nav-btn"
                                size="small"
                                variant="flat"
                                color="surface"
                                elevation="2"
                            >
                                <v-icon size="small">arrow_back_ios</v-icon>
                            </v-btn>
                        </template>

                        <template v-slot:next="{ props }">
                            <v-btn
                                v-bind="props"
                                class="carousel-nav-btn"
                                size="small"
                                variant="flat"
                                color="surface"
                                elevation="2"
                            >
                                <v-icon size="small">arrow_forward_ios</v-icon>
                            </v-btn>
                        </template>

                        <v-carousel-item
                            v-for="(slide, i) in slides"
                            :key="i"
                        >
                            <v-img
                                :src="slide.image"
                                :height="carouselHeight"
                                cover
                                class="rounded-lg"
                            ></v-img>
                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                
                <v-col cols="6" class="pl-3">
                    <TechnicalSheet :product="slides[currentSlide]" :style="{ height: `${carouselHeight}px` }" />
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TechnicalSheet from '@/modules/home/components/TechnicalSheet.vue';

const currentSlide = ref(0);

const slides = [
    {
        image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157',
        title: 'Camisa Slim Fit en blanco',
        description: 'Camisa de corte slim fit confeccionada en algodón de alta calidad. Diseño elegante y versátil, perfecta para ocasiones formales o casuales.',
        status: { text: 'Disponible', color: 'success' },
        details: [
            { icon: 'local_offer', text: 'Precio: $59.99' },
            { icon: 'style', text: 'Material: 100% Algodón' },
            { icon: 'palette', text: 'Color: Blanco' },
            { icon: 'checkroom', text: 'Tallas: S, M, L, XL' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35',
        title: 'Blazer Ejecutivo Negro',
        description: 'Blazer de corte moderno en color negro, ideal para el ambiente corporativo. Confeccionado con materiales premium que garantizan durabilidad y elegancia.',
        status: { text: 'Pocas unidades', color: 'warning' },
        details: [
            { icon: 'local_offer', text: 'Precio: $129.99' },
            { icon: 'style', text: 'Material: 95% Lana, 5% Elastano' },
            { icon: 'palette', text: 'Color: Negro' },
            { icon: 'checkroom', text: 'Tallas: 38, 40, 42, 44' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8',
        title: 'Conjunto Casual Premium',
        description: 'Conjunto casual que combina estilo y confort. Ideal para el día a día, eventos informales o salidas casuales. Incluye camisa y pantalón coordinados.',
        status: { text: 'Nuevo', color: 'info' },
        details: [
            { icon: 'local_offer', text: 'Precio: $89.99' },
            { icon: 'style', text: 'Material: Algodón y Lino' },
            { icon: 'palette', text: 'Colores: Varios' },
            { icon: 'checkroom', text: 'Tallas: S a XXL' }
        ]
    },
    {
        image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc',
        title: 'Traje Formal Azul Marino',
        description: 'Traje formal de dos piezas en azul marino, corte italiano. Perfecto para ocasiones especiales y eventos formales. Incluye saco y pantalón.',
        status: { text: 'Último modelo', color: 'primary' },
        details: [
            { icon: 'local_offer', text: 'Precio: $299.99' },
            { icon: 'style', text: 'Material: 100% Lana Merino' },
            { icon: 'palette', text: 'Color: Azul Marino' },
            { icon: 'checkroom', text: 'Tallas: 38 a 46' }
        ]
    }
]

const carouselHeight = ref(600);

const updateCarouselHeight = () => {
    const width = window.innerWidth;
    if (width <= 960) { 
        carouselHeight.value = 400;
    } else {
        carouselHeight.value = 600;
    }
};

onMounted(() => {
    updateCarouselHeight();
    window.addEventListener('resize', updateCarouselHeight);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateCarouselHeight);
});
</script>

<style scoped>
.content-wrapper {
    max-width: 1400px;
}

.carousel-nav-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.carousel-nav-btn:first-child {
    left: var(--spacing-4);
}

.carousel-nav-btn:last-child {
    right: var(--spacing-4);
}

:deep(.v-window-item) {
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.v-window-item--active) {
    transform: translateX(0);
}

:deep(.v-window-item:not(.v-window-item--active)) {
    transform: translateX(100%);
    opacity: 1;
    position: absolute !important;
}
</style>
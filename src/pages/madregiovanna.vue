<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Title Section -->
        <v-row justify="center" class="my-10">
            <v-col cols="12" md="8" class="text-center">
                <h1 class=" title text-h4 font-weight-bold">Madre Giovanna Francesca</h1>
                <h4 class="subtitle font-weight-bold mt-4">
                Breve profilo della Serva di Dio Madre Giovanna Francesca dello Spirito Santo, al secolo Luisa Ferrari
                </h4>
                <v-divider class="my-4"></v-divider>
            </v-col>
        </v-row>

        <!-- Biography Section -->
        <v-row class="mt-4" justify="center">
          <CardSection :cards="bios" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const bios = ref([
  {
    image: new URL('@/assets/images/home/madre_giovanna_4.jpg', import.meta.url).href,
    maxSize: 200,
    url: new URL('@/assets/documents/biografiamg.pdf', import.meta.url).href,
    target: '_blank',
    title: 'Biografia Integrale',
    description: 'Versione integrale'
  },
  {
    image: new URL('@/assets/images/home/madre_giovanna_4.jpg', import.meta.url).href,
    maxSize: 200,
    url: new URL('@/assets/documents/brevebiografia.pdf', import.meta.url).href,
    target: '_blank',
    title: 'Biografia Breve',
    description: 'Versione breve'
  }
])
</script>

<style scoped>
.page-header {
  font-size: 1.5rem;
}

.v-img {
  display: block;
  margin: 0 auto;
}
</style>

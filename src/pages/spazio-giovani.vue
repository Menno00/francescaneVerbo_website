<template>
  <v-app>
    <v-main>
      <v-container>
        <!-- Title Section -->
        <v-row justify="center" class="my-10">
          <v-col cols="12" md="8" class="text-center">
            <h1 class=" title text-h4 font-weight-bold">Spazio Giovani</h1>
            <h3 class="subtitle text-h6 font-weight-bold mt-4">Benvenuti nel nostro sito ufficiale</h3>
            <v-divider class="my-4"></v-divider>
          </v-col>
        </v-row>
        <!-- Main Cards Section -->
        <v-row class="mt-10">
          <CardSection :cards="mainCards" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { defineComponent } from 'vue'
import CardSection from '@/components/CardSection.vue';
const mainCards = [
  {
    image: new URL('@/assets/images/home/madre_giovanna_4.jpg', import.meta.url).href,
    title: 'Accompagnamento francescano vocazionale per corrispondenza',
    maxSize: 200
  },
  {
    image: new URL('@/assets/images/home/2_p9.jpg', import.meta.url).href,
    title: 'Carisma e missione',
    maxSize: 200
  },
  {
    image: new URL('@/assets/images/home/gocce_scritta.jpg', import.meta.url).href,
    title: 'Donazione',
    maxSize: 200
  },
  {
    image: new URL('@/assets/images/home/gocce_scritta.jpg', import.meta.url).href,
    title: 'Progetti della fondazione Gocce Vive',
    maxSize: 200
  }
]
</script>
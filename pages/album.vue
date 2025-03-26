<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12">
            <h1 class="text-center">{{ albumName }}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col v-for="photo in photos" :key="photo" cols="12" md="4">
            <v-card>
              <v-img :src="`/src/assets/images/album/${albumName}/${photo}`" class="photo" />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppFooter/>
  </v-app>
  </template>
  
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import albumData from '../assets/images/album/album.json'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
  
  const route = useRoute()
  const albumName = ref(route.params.album)
  const photos = ref([])
  
  const fetchPhotos = () => {
    photos.value = albumData[albumName.value] || []
  }
  
  onMounted(fetchPhotos)
  </script>
  
  <style scoped>
  .photo {
    width: 100%;
    height: auto;
  }
  </style>
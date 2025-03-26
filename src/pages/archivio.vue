<template>
  <v-container>
    <v-row>
      <v-col cols="12" >
        <h1 class="text-center" >Archivio Fotografico</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="album in albums" :key="album.name" cols="12" md="4">
        <v-card @click="goToAlbum(album.name)" class="album-card">
          <v-card-title>{{ album.name }}</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import albumData from '../assets/images/album/album.json'

const albums = ref([])

onMounted(() => {
  albums.value = Object.keys(albumData).map(name => ({ name }))
})
const router = useRouter()

const goToAlbum = (albumName) => {
  router.push({ name: 'album', params: { album: albumName } })
}


</script>

<style scoped>
.album-card {
  cursor: pointer;
  transition: transform 0.3s ease;
  height: 100% ;
}

.album-card:hover {
  transform: translateY(-5px);
}
</style>
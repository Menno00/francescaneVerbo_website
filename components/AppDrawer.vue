<template>
    <v-list v-model:opened="openedGroups">
        <v-list-item link class="text-uppercase text-bold" to="/about">
          Chi Siamo
        </v-list-item>
        
        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              class="text-uppercase text-bold"
            >Progetti</v-list-item>
          </template>

          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="item.title"
            :title="item.title"
            :to="{ path: '/projects', hash: item.hash}"
          ></v-list-item>
        </v-list-group>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              class="text-uppercase text-bold"
            >Risorse</v-list-item>
          </template>

          <v-list-item
            to="/risorse"
          >Risorse</v-list-item>
          <v-list-item
            to="/archivio"
          >Archivio Fotografico</v-list-item> 
        </v-list-group>

        <v-list-item link class="text-uppercase text-bold" href='https://emozioniafricane.com/' target='_blank'>
          Blog
        </v-list-item>

        <v-list-item link class="text-uppercase text-bold" to="/contact">
          Contatti
        </v-list-item>

        <v-list-item link class="text-uppercase text-bold" to="/donazione">
          Dona ora!
        </v-list-item>
      </v-list>
</template>

<script setup>
import { ref } from 'vue'

// Initialize with empty array to keep all groups closed by default
const openedGroups = ref([])

const items = [
    { title: 'Brasile', hash: '#Brasile'  },
    { title: 'Uruguay', hash: '#Uruguay' },
    { title: 'Bolivia', hash: '#Bolivia' },
    { title: 'Angola', hash: '#Angola' },
    { title: 'Italia', hash: '#Italia' },
  ]
</script>
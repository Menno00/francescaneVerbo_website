<template>
  <v-container app class="d-flex flex-row align-center justify-space-between mt-3" height="60px">
    <div class="d-flex flex-row align-center">
      <v-img src="@/assets/images/logo-nobg.png" width="50px"></v-img>
      <a class="text-bold text-decoration-none ml-2" href="/"
        >Missionarie Francescane <br> del Verbo Incarnato</a>        
    </div>

    <div>
      <a v-if="!mobile" class="text-uppercase text-bold text-decoration-none mx-4" href="/about">Chi Siamo</a>
      <v-menu v-if="!mobile" open-on-hover>
        <template v-slot:activator="{ props }">          
          <a v-bind="props" class="text-uppercase text-bold text-decoration-none mx-4" href="/projects">Progetti</a>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
            :to="{ path: '/projects', hash: item.hash}"            
          > 
            {{ item.title }}
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu v-if="!mobile" open-on-hover>
        <template v-slot:activator="{ props }">     
          <a v-bind="props" class="text-uppercase text-bold text-decoration-none mx-4" href="/risorse">Risorse</a>
        </template>

        <v-list>
          <v-list-item
            to="/risorse"
          >Risorse</v-list-item>
          <v-list-item
            to="/archivio"
          >
            Archivio Fotografico
          </v-list-item>           
        </v-list>
      </v-menu>
      <a v-if="!mobile" class="text-uppercase text-bold text-decoration-none mx-4" href='https://emozioniafricane.com/' target='_blank'>Blog</a>
      <a v-if="!mobile" class="text-uppercase text-bold text-decoration-none mx-4" href="/contact">Contatti</a>
      <a v-if="!mobile" class="text-uppercase text-bold text-decoration-none mx-4" href="/donazione">DONA ORA!</a>
    </div>
    <!-- Icona hamburger per la versione mobile -->
    <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- Menu laterale per dispositivi mobili -->
    <v-navigation-drawer v-if="mobile" v-model="drawer" app temporary location="right">
        <app-drawer></app-drawer>
    </v-navigation-drawer>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';
const { mobile } = useDisplay();
const drawer = ref(false);

const items = [
    { title: 'Brasile', hash: '#Brasile'  },
    { title: 'Uruguay', hash: '#Uruguay' },
    { title: 'Bolivia', hash: '#Bolivia' },
    { title: 'Angola', hash: '#Angola' },
    { title: 'Italia', hash: '#Italia' },
  ]
</script>

<style scoped>

</style>

<template>
  <template v-for="(card, index) in cards" :key="index">
    <v-col cols="12" md="3" class="py-4">
      <v-card 
        @click="goToUrl(card.url, card.target)"
        class="elevation-4 text-center h-100 card-container"
      >
        <div class="image-container">
          <v-img
            :src="card.image"
            aspect-ratio="1"
            class="rounded-circle mx-auto mt-4"
            :max-height="card.maxSize"
            :max-width="card.maxSize"
            contain
          ></v-img>
        </div>
        <v-card-title class="card-title-text">
          {{ card.title }}
        </v-card-title>
      </v-card>
    </v-col>
  </template>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.image-container {
  flex-shrink: 0; /* Prevents image from shrinking */
}

.card-title-text {
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  max-width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}
</style>

<script setup>
  import { useRouter } from 'vue-router' // Import useRouter from vue-router
  
  const router = useRouter()

  defineProps({
    cards: {
      type: Array,
      required: true
    }
  })

  const goToUrl = (url, target) => {  // Add target parameter
    if (target === '_blank') {
      // External URL - open in new tab
      window.open(url, '_blank', 'noopener,noreferrer')
    } else {
      // Internal URL - use router
      router.push(url)
    }
  }
</script>
  
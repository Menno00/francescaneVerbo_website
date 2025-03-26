<template>
  <v-app>
    <v-main>
      <v-container>
        <image-start></image-start>
        <chi-siamo class="ma-10"></chi-siamo>
        <video-home></video-home>
        <madre-giovanna></madre-giovanna>

        <!-- Main Cards Section -->
        <v-row class="mt-10">
          <CardSection :cards="mainCards" />
        </v-row>

        <!-- Additional Cards Section -->
        <v-row class="mt-8">
          <CardSection :cards="additionalCards" />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import VideoCard from '@/components/home/VideoCard.vue'
import CardSection from '@/components/CardSection.vue'


</script>

<style scoped>

.v-card {
  border-radius: 12px;
}

.v-card-title {
  color: #2c3e50;
}

.v-footer {
  font-size: 14px;
}

.v-btn {
  font-weight: bold;
  text-transform: capitalize;
}

.media-section {
  display: flex;
  align-items: stretch;
}
</style>

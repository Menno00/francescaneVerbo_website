<!-- components/VideoCard.vue -->
<template>
    <v-card class="elevation-4 video-card">
        <v-responsive aspect-ratio="16/9">
          <video
            src="@/assets/videos/home/video.mp4"
            controls
            autoplay
            loop
            class="video-player"
          ></video>
        </v-responsive>
      </v-card>
  </template>
  
  <style scoped>
  .video-card {
    height: 100%;
  }
  
  .video-player {
    width: 100%;
    object-fit: cover;
  }
  </style>
  
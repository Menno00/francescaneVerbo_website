<template>
  <v-card class="elevation-2 project-card">
    <!-- Use v-text instead of mustache syntax for better performance -->
    <v-card-title class="font-weight-bold text-primary" v-text="project.name" />
    <v-card-text>
      <p v-text="project.short_description" />
    </v-card-text>
    <v-card-actions>
      <v-btn 
        color="primary" 
        outlined 
        :to="projectLink"
        @click="saveToStorage"
        v-text="'Scopri di più'"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProjectPage',
  props: {
    project: {
      type: Object,
      required: true
    },
    country: {
      type: Object, 
      required: true,
    },
  },
  computed: {
    projectLink() {
      const encodedCountry = encodeURIComponent(this.country.name);
      const encodedProjectId = encodeURIComponent(this.project.id);
      return {
        path: `/projects/${encodedCountry}/${encodedProjectId}`
      };
    },
  },
  methods: {
    saveToStorage() {
      localStorage.setItem('currentProject', JSON.stringify(this.project));
    },
  },
};
</script>

<style scoped>
.project-card {
  transform: translateZ(0);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform, box-shadow;
}

.project-card:hover {
  transform: translateY(-5px) translateZ(0);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>

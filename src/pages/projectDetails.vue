<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="12" class="text-center my-10">
            <h1>{{ projectName }}</h1>
            <v-img :src="projectImage" height="400px" class="my-5"></v-img>
            <p>{{ projectDescription }}</p>
            <v-btn color="primary" @click.prevent="goBack" class="my-5">Torna Indietro</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <AppFooter/>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'ProjectDetails',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      project: null
    }
  },
  computed: {
    projectName() {
      return this.project?.name ?? 'Project Not Found'
    },
    projectDescription() {
      return this.project?.description ?? ''
    },
    projectImage() {
      return this.project?.image ?? ''
    }
  },
  created() {
    try {
      const savedProject = localStorage.getItem('currentProject')
      if (savedProject) {
        this.project = JSON.parse(savedProject)
      }
    } catch (error) {
      console.error('Error loading project from localStorage:', error)
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>

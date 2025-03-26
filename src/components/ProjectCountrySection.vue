  <template>
    <v-container>
      <v-col cols="12" >
        <v-card class="pa-4 elevation-2 bg-primary">
          <h2 class="font-weight-bold text-center text-uppercase">
            {{ country.name }}
          </h2>

          <!-- Progetti del Paese -->
          <v-container>
            <v-row>
              <v-col v-for="project in country.projects" :key="project.name" cols="12" md="6" lg="4">
                <ProjectPage :project="project" :country="country" />

              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-container>
  </template>
<script>
import ProjectPage from '@/components/ProjectPage.vue';

export default {
  name: 'ProjectCountrySection',
  props: {
    country: {
      type: String,
      required: true,
    },
  },
  components: {
    ProjectPage,
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card>
          <v-img src="" height="200px"></v-img>
          <v-card-title>Benvenuti!</v-card-title>
          <v-card-subtitle>
            Le Suore Francescane Missionarie del Verbo Incarnato sono impegnate nella missione di diffondere l'amore di Dio in tutto il mondo.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn to="/about">Scopri di più</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
/* Aggiungi stili specifici se necessario */
</style>

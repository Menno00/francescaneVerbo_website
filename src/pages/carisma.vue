<template>
    <v-container fluid class="pa-4" style="background-color: #f5f5f5;">  
      <!-- Content Section -->
      <v-row justify="center">
        <v-col cols="12" md="6">
            <!-- Image Section -->
            <v-img 
                src="@/assets/images/carisma.jpg" 
                alt="Carisma e Missioni" 
                class="mb-4 mx-auto" 
                max-width="600" 
                height="auto" 
                contain 
            />
            
            <!-- Mission Statement -->
            <h3 class="text-h5 font-weight-medium mb-4 text-center">Carisma e Missioni</h3>
            
            <p class="text-body-1 mb-4">
              <strong>Qual è la nostra missione?</strong> 
              La nostra missione è "preparare le vie al Signore" e far sì che ogni uomo e donna si convertano a Dio. 
              Ispirandoci alla Incarnazione del Figlio di Dio, che venne tra di noi per condividere le nostre gioie e tristezze e così parlarci e mostrarci il Regno di suo Padre. 
              Andiamo verso le diverse realtà e luoghi sapendo che i "germi del Verbo" sono presenti nelle culture dei popoli, ascoltando i loro aneliti e necessità, preoccupandoci che la nostra parola e le nostre opere trasmettano l'amore di Dio.
            </p>
            <p class="text-body-1 mb-4">
              Rendersi utili al popolo, ecco quello che Dio vuole da noi, in questa terribile svolta sociale, facendo degli ostacoli la pedana di lancio! 
              Se sapessimo guardare con gli occhi di Dio, tutta la vita sarebbe un segno!, e a noi sarebbe facile trasformarci in "esploratrici" dello Spirito Santo nei nostri simili, d'ogni razza e colore. 
              Per questo ci spinga la Destra del Signore ad opere meravigliose, umanitarie e sante, divenendo le "missionarie" più presenti alla storia e alle sue vicende, 
              in modo attivo, nel possesso della Verità che non muta, e facendo toccar con mano che l'amore disarmato è la forza più potente in tutto il mondo.
            </p>
            <p class="text-body-1 mb-4">
              Considerando tutto "degna missione", privilegiamo la visita alle famiglie, l'inserimento nella pastorale parrocchiale e la presenza caritativa in particolare là dove ci sono situazioni di maggiore necessità. 
              Per questo noi siamo presenti nelle parrocchie o comunità di missione nella campagna case per anziani, centri giovanili, centri di salute, lavoro educativo informale e formale o pastorale specifica. 
              Inserite nella realtà locale, lavoriamo con gli altri per promuovere il bene comune, particolarmente tra i più poveri e esclusi.
            </p>
  
            <!-- PDF Document Link -->
            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <v-btn href="document/carisma.pdf" target="_blank" class="mt-4" color="deep-purple accent-4" rounded>
                  Documento integrale
                </v-btn>
              </v-col>
            </v-row>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: "CarismaMissioniPage",
  };
  </script>
  
  <style scoped>
  .page-header {
    font-size: 3rem;
    font-weight: 600;
    color: #5e35b1;
  }
  
  .v-breadcrumbs {
    font-size: 1.2rem;
  }
  
  .text-body-1 {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
  }
  
  .v-btn {
    font-weight: 600;
    text-transform: none;
    display: inline-flex;
    align-items: center;
  }
  </style>
  
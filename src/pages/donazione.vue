<template>
    <v-container fluid class="pa-4" >  
      <h1 class="text-center">Archivio Fotografico</h1>
      <!-- Content Section -->
      <v-row justify="center" class="my-8">
        

        <v-col cols="12" md="4">
            <h6 class="text-h6 font-weight-medium mt-4 text-center text-black">FONDAZIONE GOCCE VIVE</h6>
            <p class="text-body-2 mb-4 text-center text-black">[Con possibilità di agevolazioni fiscali]</p>

            <!-- Image Section -->
            <v-img 
                src="@/assets/images/home/gocce_scritta.jpg" 
                alt="Carisma e Missioni" 
                class="mb-4 mt-10 mx-auto" 
                max-width="100" 
                height="auto" 
                contain 
            />
            
            
            <p class="text-body-1 mb-4 mt-8">
                Donazioni a missioni, progetti di promozione sociale, adozioni, ecc.
            </p>
            <p class="text-body-1 mb-4">
                <strong>Bonifico bancario</strong><br>
                IBAN: IT70N 03069 09606 100 000 184511<br>
                INTESA SAN PAOLO <br>
                Codice BIC: BCITITMM<br>
                Intestato a: Fondazione Gocce Vive - Ente Filantropico ETS<br>
                <strong>Causale:</strong> Missione di..(indicare il Paese)<br>
                <strong>Progetto:</strong> (indicare il nome del progetto)
                Nella causale ricordati di specificare i tuoi dati personali per consentirci di ringraziarti.
            </p>
            <p class="text-body-1 mb-4">
                <strong>Specificare sempre la causale del versamento,</strong> indicando la missione (es. Brasile) 
                e il nome del bambino stesso se si tratta di un’adozione o del progetto. 
            </p>
            <p class="text-body-1 mb-4">
                Referente:  suor Rosa Ferretti <br>
                fondazionegoccevive@francescaneverbo.com 
            </p>
            <p class="text-body-1 mb-4 bg-yellow">
                DONA IL <strong>5x1000</strong> ALLA FONDAZIONE <br>
                Codice Fiscale:  943.168.604.88
            </p>
  
            <!-- PDF Document Link -->
            <v-row justify="center">
              <v-col cols="12" class="text-center">
                <v-btn href="../assets/documents/carisma.pdf" target="_blank" class="mt-4 text-center" color="deep-purple accent-4" rounded>
                    INFO DEPLIANT
                </v-btn>
              </v-col>
            </v-row>
        </v-col >
        <v-col cols="12" md="4">
            <h6 class="text-h6 font-weight-medium text-center text-black">ISTITUTO delle SUORE MISSIONARIE FRANCESCANE del VERBO INCARNATO</h6>
            <p class="text-body-2 mb-4 text-center text-black">[Non consente la detrazione/deduzione fiscale]</p>
            <!-- Image Section -->
            <v-img 
                src="@/assets/images/logo.jpg" 
                alt="Carisma e Missioni" 
                class="mb-4 mx-auto" 
                max-width="100" 
                height="auto" 
                contain 
            />
            
            <p class="text-body-1 mb-4">
                Donazioni all’Istituto, offerte generiche, sostegno alle Suore e/o alle Comunità            </p>
            <p class="text-body-1 mb-4">
                <strong>Bonifico bancario</strong><br>
                Intesa Sanpaolo s.p.a.<br>
                Ag. Fiesole<br>
                N° conto: 4608 <br>
                IBAN IT27V 0306937 8420 0000 0004608 <br>
                BIC: BCITITMM <br>
                <strong>Intestazione:</strong> Congregazione delle suore Missionarie Francescane del Verbo Incarnato <br>
            </p>
            <p class="text-body-1 mb-4">
                <strong>Specificare sempre la causale del versamento,</strong> indicando lo scopo della donazione (se è generica scrivere semplicemente offerta “All'Istituto MFVI”) 
            </p>
            <p class="text-body-1 mb-4">
                Per informazioni: <br>
                Missionarie Francescane del Verbo Incarnato<br>
                Via Sant’Apollinare,2-50014 Fiesole (FI)<br>
                Tel. 055 59200<br>
 
            </p>
  
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
    color: #000;
  }
  
  .v-btn {
    font-weight: 600;
    text-transform: none;
    display: inline-flex;
    align-items: center;
  }
  </style>
  
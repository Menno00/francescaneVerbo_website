<template>
    <v-container>
      <!-- Breadcrumb -->
      <v-row>
        <v-col cols="12">
          <v-header class="text-center">
            <h1 class="display-2">Contatti</h1>
            <p class="subtitle">We'd Love to Hear From You!</p>
          </v-header>
        </v-col>
      </v-row>
  
      <!-- Google Map -->
      <v-row>
        <v-col cols="12">
            <v-card flat>
                <iframe width="100%"
                    height="400"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    src="https://www.google.com/maps/d/embed?mid=1CDKDxK5mlaPgMs1zi4-sbb6dNUk&ehbc=2E312F">
                </iframe>
            </v-card>
        </v-col>
      </v-row>
  
      <!-- Mission Section -->
      <v-row class="mt-6">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              <h3>La nostra missione</h3>
            </v-card-title>
            <v-card-text>
              <p>
                'Andate ed annunziate'<br>
                Seguendo l'invito di Gesù: “Andate ed annunziate”, per noi tutto, nel Suo Spirito, è degna missione: dalla parola al silenzio, dalla preghiera al più umile lavoro, dalla scuola alla strada, dal laboratorio alla baracca, dalla colonia al sanatorio, dall'asilo-nido al ricovero, dalla Chiesa al deserto. Tutto, sempre, ovunque, per far conoscere, amare e servire Dio! Siamo presenti in diversi paesi: Angola, Bolivia, Brasile, Italia e Uruguay.
              </p>
              <p>
                Se vuoi contattarci scrivici...
              </p>
            </v-card-text>
          </v-card>
  
          <!-- Contact Form -->
          <v-form @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field label="Nome" v-model="form.name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Email" v-model="form.email" type="email" required></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field label="Telefono" v-model="form.phone" type="tel"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Messaggio" v-model="form.message" rows="6" required></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-btn type="submit" color="primary">Submit</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
  
        <!-- Contact Information -->
        <v-col cols="12" md="4">
          <v-card>
            <v-card-title>
              <h3>Casa Madre</h3>
            </v-card-title>
            <v-card-subtitle>
              <h4>C.P. 70</h4>
            </v-card-subtitle>
            <v-card-text>
              <p>
                Via Madre Giovanna Ferrari, 1<br />
                50014 Fiesole (FI)<br />
              </p>
              <v-icon>mdi-phone</v-icon> <a href="tel:+3905559200">Tel./Fax: +39 055 59200</a><br />
              <v-icon>mdi-email</v-icon> <a href="mailto:casamadre@francescaneverbo.com">casamadre@francescaneverbo.com</a><br />
              <v-icon>mdi-clock</v-icon> <span>Orario   : Sempre!</span>
            </v-card-text>
            <v-card-actions>
              <v-btn icon href="#facebook-page" target="_blank"><v-icon>mdi-facebook</v-icon></v-btn>
              <v-btn icon href="#twitter-profile" target="_blank"><v-icon>mdi-twitter</v-icon></v-btn>
              <v-btn icon href="#instagram-profile" target="_blank"><v-icon>mdi-instagram</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        breadcrumbs: [
          { text: 'Home', href: '#/' },
          { text: 'Contatti' },
        ],
        form: {
          name: '',
          email: '',
          phone: '',
          message: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic (e.g., send an email, log data, etc.)
        console.log(this.form);
        this.$toast.success('Form submitted successfully!');
        this.resetForm();
      },
      resetForm() {
        this.form.name = '';
        this.form.email = '';
        this.form.phone = '';
        this.form.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .text-cloud {
    color: #4caf50;
  }
  
  .v-card {
    margin-bottom: 20px;
  }
  
  .v-btn {
    margin-right: 10px;
  }
  
  .v-icon {
    font-size: 24px;
  }
  
  .v-container {
    max-width: 1200px;
  }
  
  .v-header {
    text-align: center;
  }
  </style>
    
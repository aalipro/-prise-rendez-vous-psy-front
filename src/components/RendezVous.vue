<template>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <!-- Rendez-vous à venir -->
          <v-subheader>Rendez-vous à venir</v-subheader>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-calendar-clock</v-icon>
                </v-list-item-icon>
  
                <v-list-item-content>
                  <v-list-item-title>Vendredi 29 mars - 11h45</v-list-item-title>
                  <v-list-item-subtitle>Dr Patrice BOURREE</v-list-item-subtitle>
                  <v-list-item-subtitle>Médecin généraliste</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- ... autres rendez-vous à venir ... -->
            </v-list-item-group>
          </v-list>
  
          <v-divider></v-divider>
  
          <!-- Rendez-vous passés -->
          <v-subheader>Rendez-vous passés</v-subheader>
          <v-list>
            <v-list-item-group>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-calendar-check</v-icon>
                </v-list-item-icon>
  
                <v-list-item-content>
                  <v-list-item-title>Mercredi 6 mars - 14h15</v-list-item-title>
                  <v-list-item-subtitle>Dr Salomon MREJEN</v-list-item-subtitle>
                  <v-list-item-subtitle>Médecin généraliste</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- ... autres rendez-vous passés ... -->
            </v-list-item-group>
          </v-list>
        </v-col>
  
        <v-col cols="12" md="6">
          <!-- Détails du rendez-vous sélectionné -->
          <v-card>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Vendredi 29 mars - 11h45</v-list-item-title>
                <v-list-item-subtitle>Dr Patrice BOURREE</v-list-item-subtitle>
                <v-list-item-subtitle>Médecin généraliste</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>
  
            <v-list dense>
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-account</v-icon>
                </v-list-item-icon>
                <v-list-item-content>Patient</v-list-item-content>
                <v-list-item-action>Alias ALI</v-list-item-action>
              </v-list-item>
              <!-- ... autres détails ... -->
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    // name: 'Nav',
    props: {
      // Définissez vos props ici
    },
    data() {
      return {
        // Déclarez vos données ici
      };
    },
    computed: {
      // Définissez vos computed properties ici
    },
    methods: {
      // Déclarez vos méthodes ici
    },
    mounted() {
      // Code exécuté après le rendu du composant
    },
    // Autres hooks de cycle de vie peuvent être ajoutés ici si nécessaire
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au composant */
  </style>
  
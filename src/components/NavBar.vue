<template>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title>
        Psycolib
      </v-toolbar-title>
  
      <v-spacer></v-spacer>
      <span v-if="isConnected">
        Bonjour, {{ getUser.prenomPatient }} {{ getUser.nomPatient }}
       </span>   
      <div v-if="isConnected && isPatient" >
        <v-btn @click="$router.push('/prendre-rendez-vous')"  text>
          Prendre rendez-vous
        </v-btn>
        <v-btn @click="$router.push('/rendez-vous')"  text>
          Mes rendez-vous
        </v-btn>
      </div>  
      <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn  v-bind="props"> 
          <v-icon size="30" color="white">mdi-account-circle</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-if="! isConnected">
          <v-list-item-title>
            <v-btn class="sub-menu" @click ="$router.push('/connexion/patient');" text>Connexion</v-btn>
          </v-list-item-title>
          <v-list-item-title>
            <v-btn class="sub-menu" text>Inscription</v-btn>
          </v-list-item-title>
        </v-list-item>

        <v-list-item v-else>
          <v-list-item-title>
            <v-btn class="sub-menu" @click ="$router.push('/mon-compte');" text>Mon compte</v-btn>
          </v-list-item-title>
          <v-list-item-title>
            <v-btn @click="deconnexion()" class="sub-menu" text>Déconnexion</v-btn>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    </v-app-bar>
  </template>

  
  <script>
  import Connexion from '@/script.js/Connexion';
import { mapGetters } from 'vuex';

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
      ...mapGetters(['getUser']),
      isConnected(){
        console.log(this.getUser);
        return this.getUser != null && this.getUser != undefined
      },
      isPatient(){
        if(this.isConnected)
          return this.getUser.type.toLowerCase() == "patient";
        else
          return false;
      },
      isPsy(){
        if(this.isConnected)
          return this.getUser.type.toLowerCase() == "Psy";
        else
          return false;
      }
    },
    methods: {
      deconnexion(){
        this.$store.dispatch("setUser", null);
        sessionStorage.clear();
        this.$router.push("/");
      }
      // Déclarez vos méthodes ici
    },
    mounted() {

    },
    created(){
    }
    // Autres hooks de cycle de vie peuvent être ajoutés ici si nécessaire
  };
  </script>
<style scoped>
.sub-menu:hover {
  background-color: blue;
  color: white;
}
</style>
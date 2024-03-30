/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'; // Importez votre instance de store Vuex

import Accueil from '@/components/Accueil.vue';
import RendezVous from '@/components/RendezVous.vue';
import Connexion from '@/components/ConnexionHandler.vue';
import MonCompte from '@/components/MonCompte.vue';
import PrendreRendezVous from '@/components/PrendreRendezVous.vue';
function isAuthenticated(){
    console.log(store.state.user)
    if(store.state.user != null && store.state != undefined){
        if(store.state.user.hasOwnProperty("type")){
            var type = store.state.user.type;
            return type == "Patient" || type == "Psy"
        }
    }

    return false;
}
function checkAuth(to, from, next) {
    if (!isAuthenticated()) {
      // Si l'utilisateur n'est pas authentifié, rediriger vers la page de connexion
      next('/connexion');
    } else {
      // Sinon, continuer normalement vers la route demandée
      next();
    }
  }


const routes = [
    {
        name:'Accueil',
        path: '/',
        component: Accueil
    },
    {
        name : 'RendezVous',
        path : '/rendez-vous',
        component : RendezVous,
        beforeEnter: checkAuth
    },
    {
        name : 'Connexion:typeOfUser',
        path : '/connexion/:typeOfUser',
        component : Connexion,
        props: route => ({
            typeOfUser: ["Psy", "Patient"].includes(route.params.typeOfUser) ? route.params.typeOfUser : "Patient"
          }),
        },
    {
        name : 'MonCompte',
        path : '/mon-compte',
        component : MonCompte,
        beforeEnter: checkAuth
    },
    {
        name : 'PrendreRendezVous',
        path : '/prendre-rendez-vous',
        component : PrendreRendezVous,
        beforeEnter: checkAuth
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;


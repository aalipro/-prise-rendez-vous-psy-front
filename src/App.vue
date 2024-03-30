<template>

  <v-app>
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components: {
    // HelloWorld,
    NavBar
  },

  data: () => ({
    //
  }),

  computed : {
    ...mapGetters(['getUser']),
    isConnected(){
        this.getUser != null && this.getUser != undefined
    }
  },
  methods: {
    // redirectToAcueuil(){
    //     this.$router.push("/");
    // }
  },

  mounted(){
    // if(! this.isConnected){
    //   this.redirectToAcueuil();
    // }
  }
}
</script>

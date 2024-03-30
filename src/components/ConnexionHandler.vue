
<template>
    <v-container>
      <v-card class="mx-auto" max-width="400">
        <v-card-title style="text-align: center;margin-bottom: 20px; font-size: 10px;" class="text-h5">
          Connexion {{ typeOfUser }}
        </v-card-title>
  
        <v-card-text>
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
              required
              outlined
              type="email"
              prepend-icon="mdi-account"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              label="Mot de passe"
              required
              outlined
              prepend-icon="mdi-lock"
              append-icon="mdi-eye"
              :append-icon-clickable="true"
              :type="showPassword ? 'text' : 'password'"
              @click:append="showPassword = !showPassword"
            ></v-text-field>
            <v-checkbox
              v-model="remember"
              label="Se souvenir de mon identifiant"
            ></v-checkbox>
            <v-btn
              :disabled="!valid"
              color="yellow darken-1"
              class="white--text"
              block
              @click="validate"
            >
              Se connecter
            </v-btn>
            <div class="text-center mt-4">
              <v-btn text color="black" @click='$router.push({ path :"/connexion", params : { typeOfUser : "psy"}})'>Se connecter comme Psy?</v-btn>
            </div>
          </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions class="justify-center">
          <v-btn text color="primary" @click="register">Nouveau sur Doctolib ? S'inscrire</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import Requete from '@/script.js/Requete';
  import Connexion from '@/script.js/Connexion'
  export default {
    // name: 'LoginForm',
    data: () => ({
      valid: true,
      "email" : "john.doe@example.com",
      "password" : "password123",
      remember: false,
      showPassword: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length >= 8 || 'Password must be at least 8 characters'
      ]
    }),
    methods: {
      validate() {
        this.$refs.form.validate();
        if (this.valid) {
          this.login();
        }
      },
      login() {
        // Logic to handle login
        Connexion.getUser(this.typeOfUser,this.email,this.password)
          .then(response => {
            if(response != null && response != undefined){
              if(response.hasOwnProperty("patient")){
                console.log("login", response.patient);
                this.$store.dispatch("setUser", response.patient);
                this.$router.push("/rendez-vous")
              }
            }
          })
        console.log('Register');
      },
      forgotPassword() {
        // Logic to handle forgotten password
        console.log('Forgot Password');
      },
      register() {
        
      }
    },
    props: {
    typeOfUser: {
      type: String,
      required: true,
      default: 'Patient'
    }
    },
    mounted(){
      if( ! ["Patient","Psy"].includes(this.typeOfUser) ){
        this.$router.push({
          name : "connexion",
          params : { typeOfUser : "Patient"}
        })
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add styles here if necessary */
  </style>
  
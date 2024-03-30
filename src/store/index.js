import { createStore } from 'vuex'

export default createStore({
  state: {
    user : sessionStorage.hasOwnProperty("user") && sessionStorage.hasOwnProperty("user") != undefined
                                          ?
            JSON.parse(sessionStorage.getItem("user")): null,


  },
  getters: {
    getUser(state){
        return state.user;
    }
  },
  mutations: {
    setUser(state, unUser){
        state.user = unUser;
        console.log(this.user);
        sessionStorage.setItem("user", JSON.stringify(state.user));
    }
  },
  actions: {
    setUser({commit}, unUser){
      console.log("actions.setUser",unUser)
      commit("setUser", unUser);
    }
  },
  modules: {
  }
})

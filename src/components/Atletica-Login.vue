<template>
  <div class="contain">
    <div>
      <h1>{{ logedInMesage || 'Login na Área dos membros' }}</h1>
      <hr class="star-primary">
      <div v-if="!currentUser">
        <button type="button" name="button" class="btn" v-on:click="login">
          <i class="fa fa-fw fa-google"></i>
          Login com Google
        </button>
      </div>
      <div class="" v-else>
        <ul>
          <li v-for="listedUser of allUsers">
            <img :src="listedUser.data.photoURL" alt="foto do usuario" height="50" width="50">
            {{ listedUser.data.displayName || 'nome' }}
            <br>
            {{ listedUser.data.email || 'email' }}
            <br>
            {{ listedUser.data.isAdmin ? 'Administrador' : 'Visitante' }}
            <br>
            Último Acesso: {{ (new Date(listedUser.data.lastLogin)).toLocaleString(['pt-BR', 'en-US'], {hour12: false}) }}
          </li>
        </ul>
        <button type="button" name="button" class="btn" v-on:click="logout">
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'atletica-login',
  created () {
    this.fetchUser()
    this.fetchAllUsers()
  },
  methods: {
    ...mapActions('UsersModule', ['login', 'fetchUser', 'fetchAllUsers', 'logout'])
  },
  computed: {
    ...mapGetters('UsersModule', ['logedInMesage', 'currentUser', 'allUsers'])
  }
}
</script>

<style scoped>
div.contain {
  padding: 2rem 0;
  text-align: center;
  margin: 0 auto;
}
div.contain > div {
  margin: 0 auto;
}
i.fa {
  font-size: 3rem;
}
button {
  font-size: 2rem;
  margin: 2rem;
}
</style>

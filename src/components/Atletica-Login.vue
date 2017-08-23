<template>
  <div class="contain">
    <div>
      <h1>{{ logedInMesage || 'Login na Área dos membros' }}</h1>
      <hr class="star-primary">
      <div v-if="!user">
        <button type="button" name="button" class="btn" v-on:click="login">
          <i class="fa fa-fw fa-google"></i>
          Login com Google
        </button>
      </div>
      <div class="" v-else>
        <ul>
          <li v-for="listedUser of allUsers">
            <img :src="listedUser.photoURL" alt="foto do usuario" height="50" width="50">
            {{ listedUser.displayName }}
            <br>
            {{ listedUser.email }}
            <br>
            {{ listedUser.isAtleticaAdmin ? 'Administrador' : 'Visitante' }}
            <br>
            Último Acesso: {{ (new Date(listedUser.lastLogin)).toLocaleString(['pt-BR', 'en-US'], {hour12: false}) }}
          </li>
        </ul>
        <button type="button" name="button" @click="logout">
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
    ...mapActions(['login', 'fetchUser', 'fetchAllUsers', 'logout'])
  },
  computed: {
    ...mapGetters(['logedInMesage', 'user', 'allUsers'])
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

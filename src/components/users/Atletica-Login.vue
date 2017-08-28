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
          <li v-for="listedUser of allUsers" v-if="listedUser.data">
            <div class="fotoUsuario">
              <img :src="listedUser.data.photoURL" alt="foto do usuario" height="50" width="50">
            </div>

            <div class="dadosUsuario">
              {{ listedUser.data.displayName || 'nome' }}
              <br>
              {{ listedUser.data.email || 'email' }}
              <br>
              {{ listedUser.data.isAdmin ? 'Administrador' : 'Visitante' }}
              <br>
              Último Acesso: {{ (new Date(listedUser.data.lastLogin)).toLocaleString(['pt-BR', 'en-US'], {hour12: false}) }}
            </div>

            <div class="acoesUsuario">
              <button type="button" class="btn btn-default btn-xs" v-if="canEdit && !listedUser.data.isAdmin" v-on:click="promoverAdministrador(listedUser)">
                Promover à Administrador
              </button>
              <br>
              <button type="button" class="btn btn-danger btn-xs" v-if="currentUser.uid === listedUser.uid" v-on:click="toggleUserDeleteAlert">
                Apagar todos meus dados
              </button>
            </div>
          </li>
        </ul>
        <div ref="userDeleteAlert" class="userDeleteAlert alert alert-danger" role="alert" v-if="showUserDeleteAlert">
          <p>Por favor, confirme que quer apagar seus dados de usuário.</p>
          <p>Sabemos que você tem seus motivos, mas esperamos que tenha gostado e volte novamente algum dia. 👋</p>
          <button type="button" name="button" class="btn btn-lg btn-warning" @click="apagarUsuario">
            Apagar todos meus dados!
          </button>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="logout">
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
  data () {
    return {
      showUserDeleteAlert: false
    }
  },
  computed: {
    ...mapGetters('UsersModule', ['logedInMesage', 'currentUser', 'allUsers', 'canEdit'])
  },
  methods: {
    ...mapActions('UsersModule', [
      'login',
      'logout',

      'fetchUser',
      'fetchAllUsers',

      'promoverAdministrador',
      'apagarUsuario'
    ]),
    toggleUserDeleteAlert () {
      this.showUserDeleteAlert = !this.showUserDeleteAlert
      if (this.showUserDeleteAlert) {
        this.$nextTick(() => this.$refs.userDeleteAlert.scrollIntoView)
      }
    }
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

  li {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: center;
  }

  li * {
    margin: 1rem 2rem;
  }

  .acoesUsuario {
    min-width: 28rem;
  }

</style>

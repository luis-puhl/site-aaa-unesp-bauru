<template>
  <main>
    <h1>Editar post</h1>
    <div class="form">
      <form class="edit-post" action="index.html" method="post">
        <label>
          Título:
          <input type="text" name="titulo" value="titulo">
        </label>
        <label>
          Post:
          <textarea name="post" rows="10" cols="60"></textarea>
        </label>
      </form>
    </div>
    <atletica-post v-bind:id="id"></atletica-post>
  </main>
</template>

<script>
import AtleticaPost from '@/components/Atletica-Post'

export default {
  name: 'atletica-post-edit',
  components: {
    AtleticaPost
  },
  props: {
    id: {
      type: String,
      default: function () {
        return ''
      }
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    '$route' (to, from) {
      console.log({
        component: 'atletica-post-edit',
        routeWatch: {to, from}
      })
      this.fetchData()
      return to
    }
  },
  methods: {
    fetchData () {
      console.log('atletica-post-edit -> fetchData')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
h1 {
  grid-column: 1 / 3;
  text-align: center;
}
.form atletica-post {
  grid-row: 2;
}
</style>

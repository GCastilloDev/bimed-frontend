<template>
  <v-app>
    <AppBar v-if="mostrarAppBar" />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "App",
  data: () => ({
    path: "",
  }),
  components: {
    AppBar: () => import("./components/AppBar")
  },
  methods: {
    ...mapMutations(["setMostrarAppBar"])
  },
  data: () => ({}),
  computed: {
    ...mapState(["mostrarAppBar"])
  },
  watch: {
    /**
     * Con este método observamos el cambio de ruta,
     * para saber cuando mostrar o no la barra de menú.
     */
    $route() {
      if (this.$route.name !== "Login") {
        this.setMostrarAppBar(true);
      } else {
        this.setMostrarAppBar(false);
      }
    }
  }
};
</script>

<style lang="css">
.row {
  margin: 0 !important;
}

.col {
  padding: 0 !important;
}
</style>

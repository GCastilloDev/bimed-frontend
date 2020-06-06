<template>
  <div>
    <nav>
      <v-app-bar dense color="primary" dark>
        <v-img max-width="150px" src="../assets/bimed.svg" />
        <v-spacer></v-spacer>

        <v-app-bar-nav-icon @click="mostrar = !mostrar"></v-app-bar-nav-icon>
      </v-app-bar>
    </nav>
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="mostrar" app absolute temporary >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon color="primary">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    mostrar: null,
    items: [
      { title: "Mi cuenta", icon: "mdi-account-heart" },
      { title: "Credencial", icon: "mdi-card-account-details" },
      { title: "Pacientes", icon: "mdi-folder-account" }
    ]
  })
};
</script>
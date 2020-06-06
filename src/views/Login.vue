<template>
  <v-row style="min-height: 100vh">
    <v-col cols="12" md="6" class="primary d-flex justify-center">
      <v-img class="align-self-center" src="../assets/logo-completo.png" max-width="80%"></v-img>
    </v-col>
    <v-col cols="12" md="6" class="primary d-flex">
      <v-container class="d-flex align-self-center justify-center">
        <v-col cols="10">
          <v-card shaped elevation="12">
            <v-container class="d-flex justify-center">
              <v-col cols="10">
                <p class="d-flex justify-center">
                  <v-img src="../assets/bimed-cara.png" max-width="30%"></v-img>
                </p>
                <span>Usuario</span>
                <v-text-field
                  v-model="usuario"
                  outlined
                  color="#00C9BD"
                  prepend-inner-icon="mdi-account-heart"
                  placeholder="Ingrese su usuario"
                ></v-text-field>
                <span>Contraseña</span>
                <v-text-field
                  v-model="contrasena"
                  type="password"
                  outlined
                  color="#00C9BD"
                  prepend-inner-icon="mdi-lock"
                  placeholder="Ingrese su contraseña"
                ></v-text-field>
                <p>
                  <v-btn @click="ingresar" depressed block x-large color="#00C9BD" dark>Ingresar</v-btn>
                </p>
                <p>
                  <v-btn depressed block x-large outlined color="#00C9BD">Registrarse</v-btn>
                </p>
                <p class="d-flex justify-end">
                  <v-btn text small color="#00C9BD">Recuperar contraseña</v-btn>
                </p>
              </v-col>
            </v-container>
          </v-card>
        </v-col>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    usuario: "",
    contrasena: 123456,
    slider: 10
  }),
  methods: {
    ingresar() {
      this.$router.push({ name: "Medico" });
    }
  }
};
</script>

<template>
  <v-container>
    <v-card :elevation="5" class="mx-auto pa-5">
      <p>El flujo iniciara con:</p>
      <ul>
        <li>{{ formulario }}</li>
        <li>{{ video }}</li>
        <li>{{ firma_aerografa }}</li>
      </ul>
      <v-form>
        <v-checkbox
          v-model="formulario"
          label="Formulario"
          value="formulario"
        ></v-checkbox>
        <v-checkbox v-model="video" label="Video" value="video"></v-checkbox>
        <v-checkbox
          v-model="firma_aerografa"
          label="Firma aerografa"
          value="firma_aerografa"
        ></v-checkbox>
        <!-- El boton que debe abrir la vista de los componentes -->
        <router-link class="par" :to="{name: 'flujo_datos', params: { form: formulario, video: video, firma:firma_aerografa} }" >
        <v-btn elevation="2">Comenzar</v-btn>
        </router-link>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>


export default {
  name: "home",
  data() {
    return {
      formulario: "",
      video: "",
      firma_aerografa: "",
    };
  },
};
</script>

<style>
.par{
  text-decoration: none;
}

</style>
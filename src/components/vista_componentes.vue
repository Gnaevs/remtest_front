<template>
  <v-app>
    <v-main>
      <formulario v-if="form"></formulario>

      <videoW v-if="video"></videoW>

      <signatureP v-if="firma"></signatureP>

      <p v-if="error()">
        No seleccionaste ningun componente
      </p>


    </v-main>
  </v-app>
</template>

<script>
import formU from "./formU";
import videoW from "./video";
import signatureP from "./signature";

export default {
  name: "vista_componentes",
  props: ['form','video', 'firma'],
  components: {
    formulario: formU,
    videoW,
    signatureP,
  },
  data() {
    return {
    };
  },
  methods:{
    guardarTodo(){
      
    },
    error(){
      if(this.form || this.video || this.firma){
        return false;
        
      }else{
        return true;
      }
    }
  },
  mouted(){
    console.log("hola");
  }
};
</script>

<style>
</style>
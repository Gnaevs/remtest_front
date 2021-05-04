<template>
  <v-app>
    <v-main>      

     <router-link to="/" >Inicio</router-link>            

      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import formU from './components/formU'
import videoW from './components/video'
import signatureP from './components/signature'
export default {
  
  name: "app",
  components: {
    formulario : formU,
    videoW,
    signatureP
    },
  data() {
    return {      

    };
  },
  mouted(){
  }
  
  
 
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

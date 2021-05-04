<template>
  <v-app>
    <v-main>
      <formulario
      v-if="true"></formulario>

     <videoW
     v-if="true"></videoW>

     <signatureP
     v-if="true"></signatureP>




            

      
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

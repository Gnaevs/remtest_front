<template>
  <v-app>
    <v-main>
      <formulario
      v-if="false"></formulario>

     <videoW
     v-if="true"></videoW>

            

      
    </v-main>
  </v-app>
</template>

<script>
import formU from './components/formU'
import videoW from './components/video'
export default {
  
  name: "app",
  components: {
    formulario : formU,
    videoW
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

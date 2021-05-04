<template>
      <v-container>
        <v-card :elevation="5" class="mx-auto pa-5">
          <form 
          ref="form"
          >
            <v-text-field
              v-model="nombreC"
              label="Nombre Completo"
              prepend-icon="mdi-account"
              :error-messages="nombreCErrors"
              :counter="45"
              required
              @input="$v.nombreC.$touch()"
              @blur="$v.nombreC.$touch()"
            ></v-text-field>

            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="fecha_nacimiento"
                  :error-messages="fecha_nacimientoErrors"
                  label="Fecha de nacimiento"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  @input="$v.fecha_nacimiento.$touch()"
                  @blur="$v.fecha_nacimiento.$touch()"
                ></v-text-field>
              </template>
              <v-date-picker
                ref="picker"
                v-model="fecha_nacimiento"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              ></v-date-picker>
            </v-menu>

            <v-text-field
              v-model="email"
              label="email"
              prepend-icon="mdi-email"
              :counter="45"
              :error-messages="emailErrors"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
              required
            ></v-text-field>

            <v-text-field
              v-model="num_telefono"
              label="Telefono"
              prepend-icon="mdi-phone"
              :counter="10"
              :error-messages="num_telefonoErrors"
              @input="$v.num_telefono.$touch()"
              @blur="$v.num_telefono.$touch()"
              required
            ></v-text-field>

            <v-col class="text-right">
              <v-btn
                class="justify-right"
                type="submit"
                @click="guardar_formulario"
              >
                Guardar
              </v-btn>
            </v-col>
          </form>
        </v-card>
      </v-container>
</template>




<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
import axios from "axios";
export default {
  //parte de la validación
  mixins : [validationMixin],

  validations:{
    nombreC: {required,maxLength: maxLength(45)},
    email: {required,email},
    fecha_nacimiento: {required},
    num_telefono: {required ,maxLength: maxLength(10)}
  },

  name: "formU",
  data() {
    return {
      nombreC: "",

      email: "",
      fecha_nacimiento: "",
      num_telefono: "",
      menu: false,
    };
  },
  computed: {
    nombreCErrors(){
      const errors = []
        if (!this.$v.nombreC.$dirty) return errors
        !this.$v.nombreC.maxLength && errors.push('El nombre no puede tener mas de 45 catacteres')
        !this.$v.nombreC.required && errors.push('El nombre es Requerido.')
        return errors
    },
    fecha_nacimientoErrors(){
      const errors = []
        if (!this.$v.fecha_nacimiento.$dirty) return errors
        !this.$v.fecha_nacimiento.required && errors.push('No puedes dejar la fecha vacia.')
        return errors
    },
    emailErrors(){
      const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('El correo debe de ser valido')
        !this.$v.email.required && errors.push('El correo es requerido.')
        return errors
    },
    num_telefonoErrors(){
      const errors = []
        if (!this.$v.num_telefono.$dirty) return errors
        !this.$v.num_telefono.maxLength && errors.push('El numero de telefono no puede tener mas de 10 caracteres')
        !this.$v.num_telefono.required && errors.push('El numero de telefono es requerido.')
        return errors
    }
  }, 

  watch: {
    menu(val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = "YEAR"));
    },
  },
  methods: {
    save(fecha_nacimiento) {
      this.$refs.menu.save(fecha_nacimiento);
    },

    guardar_formulario: function (e) {
      e.preventDefault();
      this.$v.$touch()      
      let auxForm = {
        nombre: this.nombreC,
        fecha_nacimiento: this.fecha_nacimiento,
        email: this.email,
        num_telefono: this.num_telefono,
      };

      if(this.$v.nombreC.$error &&
         this.$v.fecha_nacimiento.$error &&
         this.$v.email.$error &&
         this.$v.num_telefono.$error){
           alert("Tienes errores en el formulario")
         }else
        axios.post("http://apiremtest-env.eba-yumbkaye.us-east-2.elasticbeanstalk.com/", auxForm).then((result) => {
        console.log(result);
        console.log("Datos Guardados");
      });
    },
  },
  mounted() {
    axios.get("http://apiremtest-env.eba-yumbkaye.us-east-2.elasticbeanstalk.com").then(function (response) {
      console.log(response);
    });
  },
  
};
</script>
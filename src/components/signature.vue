import SignaturePad from 'signature_pad';
<template>
  <div>
    <v-container>
      <v-card :elevation="5" class="mx-auto pa-5">
        <div class="wrapper">
          <canvas
            id="signature-pad"
            class="signature-pad1"
            width="400"
            height="200"
          ></canvas>
        </div>
        <div>
          <v-btn elevation="2" @click="guardarFirma">Guardar</v-btn>
          <v-btn elevation="2" @click="limpiarFirma">Limpiar</v-btn>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import SignaturePad from "signature_pad";
import axios from "axios"

export default {
  name: "formU",
  data() {
    return {
      canvas: null,
      signaturePad: null,
      nombreC: "",

      email: "",
      fecha_nacimiento: "",
      num_telefono: "",
      menu: false,
    };
  },
  methods: {
    dataURLToBlob(dataURL) {
      // Code taken from https://github.com/ebidel/filer.js
      var parts = dataURL.split(";base64,");
      var contentType = parts[0].split(":")[1];
      var raw = window.atob(parts[1]);
      var rawLength = raw.length;
      var uInt8Array = new Uint8Array(rawLength);

      for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], { type: contentType });
    },
    download(dataURL, filename) {
      if (
        navigator.userAgent.indexOf("Safari") > -1 &&
        navigator.userAgent.indexOf("Chrome") === -1
      ) {
        window.open(dataURL);
      } else {
        var blob = this.dataURLToBlob(dataURL);
        var url = window.URL.createObjectURL(blob);

        var a = document.createElement("a");
        a.style = "display: none";
        a.href = url;
        a.download = filename;

        document.body.appendChild(a);
        a.click();

        window.URL.revokeObjectURL(url);
      }
    },
    draw() {
      //El probema era que tenia que renderizar el DOM antes crear mi canvas
      this.canvas = document.querySelector("canvas");
      this.signaturePad = new SignaturePad(this.canvas);
    },
    guardarFirma() {
      if (this.signaturePad.isEmpty()) {
        alert("Aun no has firmado");
      } else {
        var dataURL = this.signaturePad.toDataURL();
        this.download(dataURL, "firma.png");
        var blob = this.dataURLToBlob(dataURL);
        var firmaData = new FormData();
        firmaData.append("file", blob);
        axios.post('http://localhost:3000/subir_firma', firmaData).then(
          (result) => {
              console.log(result);
              console.log("Subida exitosa");
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            }
          }
      );
        alert("Tu firma fue enviada, Aqui tienes una copia");
      }
    },
    limpiarFirma(){
      this.signaturePad.clear();
    }
  },
  mounted() {
    this.draw();
  },
};
</script>

<style>
wrapper {
  position: relative;
  width: 400px;
  height: 200px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
img {
  position: absolute;
  left: 0;
  top: 0;
}

.signature-pad {
  border-style: solid;
  position: absolute;
  left: 0;
  top: 0;
  width: 400px;
  height: 200px;
}

.signature-pad1 {
  border-style: solid;
}
</style>
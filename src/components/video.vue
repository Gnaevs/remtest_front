<template>
  <div>
    <v-container>
      <v-card :elevation="5" class="mx-auto pa-5">
        <div>
          <vue-record-video
            mode="press"
            @result="onVideoResult"
            @stream="onVideoStream"
          />
        </div>

        <div class="column">
          <div class="recorded-video">
            <video ref="Video" width="400" height="250" controls></video>
          </div>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "videoW",
  data() {
    return {
      archivo_video: null,
      recordMode: {
        video: "press",
      },
    };
  },
  methods: {
    //Aqui es donde intente hacer lo de los 10 segundos
    grabar(){
        var contdown = 10;
        if(contdown == 0){
            console.log("Ya pasaton 10 segundos");
            start();
        }else{
            contdown-=1;
            setTimeout("updateClock()",1000)
            stop();
        }


    },
    onVideoStream(stream) {
      console.log("Got a video stream object:", stream);
      
    },
    onVideoResult(data) {
      var videoData = new FormData();
      videoData.append("file", data);
      this.$refs.Video.srcObject = null;
      this.$refs.Video.src = window.URL.createObjectURL(data);
      console.log(videoData);
      axios.post('http://apiremtest-env.eba-yumbkaye.us-east-2.elasticbeanstalk.com/subir_video', videoData).then(
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

    },    
  },
};
</script>

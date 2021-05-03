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
export default {
  name: "videoW",
  data() {
    return {
      recordMode: {
        video: "press",
      },
    };
  },
  methods: {
    onVideoStream(stream) {
      console.log("Got a video stream object:", stream);
    },
    onVideoResult(data) {
      this.$refs.Video.srcObject = null;
      this.$refs.Video.src = window.URL.createObjectURL(data);
    },
    onResult(data) {
      this.recordings.push({
        src: window.URL.createObjectURL(data),
      });
    },
  },
};
</script>

<template>
  <b-row class="mb-3">
    <b-col>
      <youtube-media player-width="300" player-height="169" :video-id="videoId"></youtube-media>
    </b-col>
    <!-- <b-col cols="auto">
        <b-img width="250" src="@/assets/image/playlist_placeholder.png"></b-img>
    </b-col>
    <b-col>
      <h4>{{ playlist.title }}</h4>
      <p>{{ "Avtor. not implemented" }}</p>
      <p>{{ playlist.date }}</p>
      <h2 :class="{ negative: playlist.rating<0, positive: playlist.rating>0 }">{{ playlist.rating }}</h2>
    </b-col>-->
  </b-row>
</template>

<script>
import { getIdFromURL } from "vue-youtube-embed";
export default {
  props: {
    song: {
      type: Object,
      default: null
    }
  },
  computed: {
    videoId() {
      return getIdFromURL(this.song.url);
    }
  }
};
</script>

<style>
.negative {
  color: red;
}
.positive {
  color: olivedrab;
}
.neutral {
  color: black;
}
</style>
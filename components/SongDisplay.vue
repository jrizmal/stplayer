<template>
  <b-row class="mb-3">
    <b-col cols="auto">
      <youtube-media player-width="480" player-height="320" :video-id="videoId"></youtube-media>
    </b-col>
    <b-col>
      <b-button v-if="showDelete" @click="deleteSong" variant="warning">Izbriši</b-button>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import Vue from "vue";
import { getIdFromURL } from "vue-youtube-embed";
export default Vue.extend({
  props: {
    song: {
      type: Object,
      default: null
    },
    showDelete: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    videoId() {
      return getIdFromURL(this.song.url);
    }
  },
  methods: {
    deleteSong() {
      const data = Object.assign(
        {},
        {
          id: parseInt((this as any).song.id)
        }
      );
      // send delete request to server
      this.$axios.delete("komad/izbrisi", { data: data }).then((res: any) => {
        // then notify parent to refresh playlist
        this.$emit("deleted");
      });
    }
  },
  mounted() {}
});
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
<template>
  <b-container>
    <div v-if="playlist">
      <b-row class="mt-3 mb-5">
        <b-col>
          <h2>
            <b>{{ playlist.title }}</b>
          </h2>
          <p>Avtor: <nuxt-link :to="'/user/'+playlist.user">{{ playlist.user_name }}</nuxt-link></p>
        </b-col>
      </b-row>
      <song-display v-for="(s,index) in songs" :key="index" :song="s"></song-display>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data: function() {
    return {
      playlist: null,
      songs: []
    };
  },
  methods: {},
  mounted() {
    this.$axios.get(`seznam?id=${this.$route.params.id}`).then(res => {
      this.playlist = res.data.playlist;
      this.songs = res.data.songs;
    });
  }
});
</script>

<style>
</style>

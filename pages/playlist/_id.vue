<template>
  <b-container>
    <div v-if="playlist">
      <b-row class="mt-3 mb-5">
        <b-col cols="auto">
          <h2>
            <b>{{ playlist.title }}</b>
          </h2>
          <!-- Če je playlist naš -->
          <p>
            Avtor:
            <nuxt-link
              :to="(myPlaylist?'/profile':'/user/'+playlist.user)"
            >{{ playlist.user_name }} {{ (myPlaylist?"(Jaz)":"") }}</nuxt-link>
          </p>
        </b-col>
        <b-col>
          <!-- Če je playlist naš, prikaži gumb za dodajanje komada -->
          <b-button v-if="myPlaylist" variant="info">Dodaj komad</b-button>
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
  computed: {
    myPlaylist() {
      return (this as any).playlist.user == (this as any).$auth.user.id;
    }
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

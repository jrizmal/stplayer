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
          <b-button
            v-if="myPlaylist"
            variant="info"
            :to="'/playlist/'+playlist.id+'/add'"
          >Dodaj komad</b-button>
        </b-col>
      </b-row>
      <song-display
        v-for="(s,index) in songs"
        :key="index"
        :song="s"
        :showDelete="myPlaylist"
        @deleted="refreshSongs"
      ></song-display>
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
      return parseInt((this as any).playlist.user) == parseInt((this as any).$auth.user.id);
    }
  },
  methods: {
    refreshSongs() {
      this.$axios.get(`seznam?id=${this.$route.params.id}`).then(res => {
        this.playlist = res.data.playlist;
        this.songs = res.data.songs;
      });
    }
  },
  mounted() {
    this.refreshSongs();
  }
});
</script>

<style>
</style>

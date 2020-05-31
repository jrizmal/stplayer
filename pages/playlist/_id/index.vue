<template>
  <b-container>
    <div v-if="playlist">
      <b-row class="mt-3 mb-5">
        <b-col cols="auto">
          <h2>
            <b>{{ playlist.title }}</b><b-button v-if="!myPlaylist" @click="addToLibrary" class="ml-3">Dodaj v knjižnico</b-button>
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
    },
    addToLibrary(){
      this.$axios
        .post("seznam/v-zbirko", {
          playlist: (this as any).playlist.id
        })
        .then(res => {
          (this as any).$toast.success("Playlist uspešno dodan v knjižnico.")
        }).catch(err=>{
          (this as any).$toast.info("Playlist je že v vaši knjižnici.")
        })
    }
  },
  mounted() {
    this.refreshSongs();
  }
});
</script>

<style>
</style>

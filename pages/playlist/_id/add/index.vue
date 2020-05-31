<template>
  <b-container>
    <div v-if="playlist">
      <b-row class="mt-3 mb-3">
        <b-col cols="auto">
          <h2>
            Dodaj glasbo na
            <b>"{{ playlist.title }}"</b>
          </h2>
          <!-- Če je playlist naš -->
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="6">
          <b-form-input v-model="links" placeholder="YouTube povezave, ločene z vejico"></b-form-input>
          <p class="mt-2">
            Število obstoječih komadov:
            <b>{{ songs.length }}</b>
          </p>
          <p class>
            Število dodanih komadov:
            <b>{{ songCount }}</b>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click="addSong" variant="success">Dodaj</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth"],
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data: function() {
    return {
      playlist: null,
      songs: [],
      links: ""
    };
  },
  computed: {
    myPlaylist() {
      return (this as any).playlist.user == (this as any).$auth.user.id;
    },
    songCount() {
      return (this as any).links.split(",").length - 1;
    }
  },
  methods: {
    addSong() {
      const data = Object.assign(
        {},
        {
          playlist: (this as any).playlist.id,
          songs: [...this.links.split(",")]
        }
      );
      this.$axios.post("seznam/komad/dodaj", data).then(res => {
        this.$router.replace(`/playlist/${(this as any).playlist.id}`);
      });
    }
  },
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

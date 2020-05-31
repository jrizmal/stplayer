<template>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col>
        <h2>
          <b>Dobrodošli na strani ST Player</b>
        </h2>
        <h5>Stran je namenjena ustvarjanju in spremljanju seznamov predvajanja oz. "playlistov".</h5>
      </b-col>
    </b-row>
    <playlist-display :showControls="$auth.loggedIn" v-for="(p,index) in playlists" :key="index" :playlist="p" @refresh="refresh"></playlist-display>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      playlists: []
    };
  },
  methods: {
    refresh() {
      this.$axios.get("vsi/").then(res => {
        this.playlists = res.data;
      });
    }
  },
  mounted() {
    this.refresh();
  }
});
</script>

<style>
</style>

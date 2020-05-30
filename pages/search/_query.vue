<template>
  <b-container>
    <b-row class="mt-3 mb-5">
        <b-col>
            <h2>Rezultati iskanja</h2>
        </b-col>
    </b-row>
    <playlist-display v-for="(p,index) in playlists" :key="index" :playlist="p"></playlist-display>
    <b-row v-if="playlists.length<=0">
      <b-col>
        <p>Za poizvedbo "{{ $route.params.query }}" ni rezultatov 😐</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      playlists: [],
    };
  },
  methods: {},
  mounted() {
    this.$axios.get(`seznam/search?query=${this.$route.params.query}`).then(res => {
      this.playlists = res.data
    });
  }
});
</script>

<style>
</style>

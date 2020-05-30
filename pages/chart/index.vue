<template>
  <b-container>
    <b-row class="mt-3 mb-5">
      <b-col>
        <h2>
          <b>Lestvica najboljših</b>
        </h2>
      </b-col>
    </b-row>
    <playlist-display v-for="(p,index) in playlists" :key="index" :playlist="p"></playlist-display>
    
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
  watch: {},
  computed: {},
  mounted() {
    this.$axios.get("lestvica/").then(res => {
      this.playlists = res.data;
    });
  }
});
</script>

<style>
</style>
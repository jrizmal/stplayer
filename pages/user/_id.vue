<template>
  <b-container>
    <div v-if="user">
      <b-row class="mt-3 mb-3">
        <b-col>
          <h2>
            <b>{{ user.name }}</b>
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h3 class="mb-3">Playlisti od {{ user.name }}</h3>
          <playlist-display v-for="(p,index) in playlists" :key="index" :playlist="p"></playlist-display>
          <p v-if="playlists.length<=0">Oseba {{ user.name }} še ni ustvarila playlista 😶</p>
        </b-col>
      </b-row>
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
      user: null,
      playlists: []
    };
  },
  methods: {},
  mounted() {
    if(this.$route.params.id == (this as any).$auth.user.id){
      this.$router.replace("/profile")
    }
    this.$axios.get(`user-profil?id=${this.$route.params.id}`).then(res => {
      this.user = res.data;
    });
    // TODO: Najdi vse njegove playliste
    this.$axios.get(`seznam/uporabnik?user=${this.$route.params.id}`).then(res => {
      this.playlists = res.data;
    });
  }
});
</script>

<style>
</style>

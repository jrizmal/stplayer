<template>
  <b-container>
    <b-row class="my-3">
      <b-col sm="2">
        <h2>
          <b>Profil</b>
        </h2>
      </b-col>
      <b-col>
        <b-row>
          <b-col>
            <h3>{{ $auth.user.name }}</h3>
            <p>{{ $auth.user.email }}</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <h4 class="my-4">
              <b>Moji seznami predvajanja</b>
            </h4>
            <playlist-display v-for="(p,index) in myPlaylists" :key="index" :playlist="p"></playlist-display>

            <p v-if="myPlaylists.length<=0">
              Niste še ustvarili seznama 😯
              <b-button class="ml-3" to="/playlist/add" variant="success">Ustvarite ga zdaj</b-button>
            </p>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <h4 class="my-4">
              <b>Moja knjižnica</b>
            </h4>
            <playlist-display v-for="(p,index) in myLibrary" :key="index" :playlist="p"></playlist-display>
            <p v-if="myLibrary.length<=0">V knjižnici še nimate albumov 😶</p>
          </b-col>
        </b-row>

        <!-- <b-row>
          <b-col>še kej</b-col>
        </b-row>
        <b-row>
          <b-col>še kej</b-col>
        </b-row>-->
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth"],
  data: function() {
    return {
      myPlaylists: [],
      myLibrary: []
    };
  },
  methods: {
    loadMyPlaylists() {
      this.$axios.get("seznam/moji").then(res => {
        console.log(res.data);

        this.myPlaylists = res.data;
      });
    },
    loadMyLibrary() {
      this.$axios.get("seznam/knjiznica").then(res => {
        this.myLibrary = res.data;
      });
    }
  },
  watch: {},
  computed: {},
  mounted() {
    this.loadMyPlaylists();
    this.loadMyLibrary();
  }
});
</script>

<style>
</style>
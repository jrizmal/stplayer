<template>
  <b-container>
    <b-row class="mt-3 mb-3">
      <b-col sm="6">
        <h2>
          <b>Dodaj nov seznam predvajanja</b>
        </h2>
        <b-form-input v-model="title" placeholder="Ime seznama"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col sm="6">
        <h3>Dodaj nekaj pesmi za začetek 😊</h3>
        <p>Lahko jih dodaš več, tako da povezave ločiš z vejico.</p>
        <b-form-input v-model="links" placeholder="YouTube povezave, ločene z vejico"></b-form-input>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6">
        <b-button @click="addPlaylist" variant="success">Ustvari nov seznam</b-button>
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
      title: "",
      links: ""
    };
  },
  methods: {
    addPlaylist() {
      const data = Object.assign(
        {},
        {
          title: this.title,
          songs: [...this.links.split(",")]
        }
      );
      this.$axios.post("seznam/nov", data).then(res=>{
        this.$router.back();
        
      })
    }
  },
  mounted() {}
});
</script>

<style>
</style>

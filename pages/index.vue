<template>
  <b-container>
    <b-row class="my-3">
      <b-col sm="2">
        <h2><b>ST Player</b></h2>
        
      </b-col>
      <b-col>
        <b-button @click="testAxios">Test axios</b-button>
        <b-button to="/login">Prijava</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo.vue";

export default Vue.extend({
  components: {
    Logo
  },
  methods: {
    testAxios(): void {
      this.$axios.get("/").then(res => {
        console.log(res);
      });
    }
  }
});
</script>

<style>
</style>

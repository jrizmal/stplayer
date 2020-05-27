<template>
  <b-container>
    <b-row>
      <b-col cols="auto">
        <h3>STPlayer</h3>
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

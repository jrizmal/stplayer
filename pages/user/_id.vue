<template>
  <b-container>
    <div v-if="user">
      <b-row class="mt-3 mb-5">
        <b-col>
          <h2>
            <b>{{ user.name }}</b>
          </h2>
          
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
    };
  },
  methods: {},
  mounted() {
    this.$axios.get(`user-profil?id=${this.$route.params.id}`).then(res => {
      this.user = res.data;
    });
  }
});
</script>

<style>
</style>

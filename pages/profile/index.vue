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
                  Moji plejlisti
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                  še kej
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                  še kej
              </b-col>
          </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  middleware: ["auth"],
  data: function() {
    return {};
  },
  methods: {},
  watch: {},
  computed: {}
});
</script>

<style>
</style>
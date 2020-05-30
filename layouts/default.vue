<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand to="/">ST Predvajalnik</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Vsi seznami predvajanja</b-nav-item>
          <b-nav-item href="#">Lestvica najboljših</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              v-model="listSearchQuery"
              size="sm"
              class="mr-sm-2"
              placeholder="Išči med seznami"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" @click="searchLists">Išči</b-button>
          </b-nav-form>

          <b-nav-item-dropdown v-if="$auth.loggedIn" right>
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              <em>{{ $auth.user.name }}</em>
            </template>
            <b-dropdown-item to="/profile">Profile</b-dropdown-item>
            <b-dropdown-item @click="signOut">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-button v-else to="/login" size="sm" class="my-2 my-sm-0 ml-2" variant="success">Prijava</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      listSearchQuery: ""
    };
  },
  methods: {
    searchLists(): void {
      // TODO: Search list and redirect to search results page
      console.log(this.listSearchQuery);
    },
    signOut(){
      (this as any).$auth.logout()
    }
  }
});
</script>

<style>
</style>

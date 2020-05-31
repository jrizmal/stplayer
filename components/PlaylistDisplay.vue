<template>
  <b-row class="mb-3">
    <b-col cols="auto">
      <b-img
        @click="showDetails"
        class="cursor-pointer"
        width="250"
        src="@/assets/image/playlist_placeholder.png"
      ></b-img>
    </b-col>
    <b-col>
      <h4 @click="showDetails" class="cursor-pointer">{{ playlist.title }}</h4>
      <p>{{ "Avtor. not implemented" }}</p>
      <p>{{ playlist.date }}</p>

      <h2 v-if="showControls" :class="{ negative: playlist.rating<0, positive: playlist.rating>0 }">
        <b-button @click="vote('down')" variant="danger">-</b-button>
        {{ playlist.rating }}
        <b-button @click="vote('up')" variant="success">+</b-button>
      </h2>
    </b-col>
    <b-col v-if="showControls">
      <b-button @click="addToLibrary">Dodaj v zbirko</b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    playlist: {
      type: Object,
      default: null
    },
    showControls: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    showDetails() {
      this.$router.push(`/playlist/${this.playlist.id}`);
    },
    vote(action) {
      // pošlji userid in playlist id na server
      this.$axios
        .post("seznam/vote", {
          playlist: this.playlist.id,
          action: action,
        })
        .then(res => {
          this.$emit("refresh")
        });
    },
    
    addToLibrary() {
      this.$axios
        .post("seznam/v-zbirko", {
          playlist: this.playlist.id
        })
        .then(res => {
          console.log(res);
        });
    },
    determineVote() {}
  },
  mounted() {
    this.determineVote();
  }
};
</script>

<style>
.negative {
  color: red;
}
.positive {
  color: olivedrab;
}
.neutral {
  color: black;
}
.cursor-pointer {
  cursor: pointer;
}
</style>